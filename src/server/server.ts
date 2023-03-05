import Stripe from 'stripe'
import express from 'express'
import dotenv from 'dotenv';

const app = express()
dotenv.config();
// This is your test secret API key.
const apiKey = process.env.STRIPE_SECRETE_KEY;

if (!apiKey) {
  throw new Error('Stripe API key not found');
}

const stripe = new Stripe(apiKey, {
  apiVersion: '2022-11-15'
});

app.use(express.json())

app.use(express.static('build'));

app.post('/create-checkout-session', async (req: any, res: any) => {
  const { items, email } = req.body

  const transformItems = items.map((item: { description: string; count: number; price: number; title: string; image: string; }) => {
    discription: item.description
    quantity: item.count
    price_data: {
      currency: 'usd'
      unit_amount: item.price * 100
      product_data: {
        name: item.title
        image: item.image
      }
    }
  })

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_rates: ['shr_1ML3fyCp6tjr9dpDh7MKUowd'],
    shipping_address_collection: {
      allowed_countries: ['GB', 'US', 'CA'],
    },
    line_items: transformItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/cancel`,
    metadata: {
      email,
      image: JSON.stringify(items.map((item: {image: string}) => item.image)),
    },
  })
  res.send({url: session.url})
  res.status(200).json({ id: session.id })
})

app.listen(3000, () => console.log('Running on port 3000'))
