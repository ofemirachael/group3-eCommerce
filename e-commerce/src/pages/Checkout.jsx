import React from 'react'
import AddressDetails from '../components/addressdetails/AddressDetails'
import CheckoutHeading from '../components/checkoutheading/CheckoutHeading'
import CheckoutSubheading from '../components/checkoutsubheading/CheckoutSubheading'
import DeliveryMethod from '../components/deliverymethod/DeliveryMethod'
import PaymentMethod from '../components/paymentmethod/PaymentMethod'

const Checkout = () => {
  return (
    <div>
      <CheckoutHeading heading="checkout" />
      <CheckoutSubheading title="Address details"></CheckoutSubheading>
      <AddressDetails />
      <CheckoutSubheading title="Delivery method"></CheckoutSubheading>
      <DeliveryMethod />
      <CheckoutSubheading title="Billing details"></CheckoutSubheading>
      <PaymentMethod />
    </div>
  )
}

export default Checkout
