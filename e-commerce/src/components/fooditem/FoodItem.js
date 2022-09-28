import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import DiscountBadge from '../DiscountBadge'

import { FiPlus } from 'react-icons/fi'
import '../fooditem/FoodItem.css'

const FoodItem = ({
  id,
  discount,
  img,
  name,
  price,
  discountprice,
  handleAdd,
  product,
  handleRemove,
  itemFoundInCart,
}) => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' })
  }, [])

  return (
    <>
      <div className="foodContainer">
        <div className="foodcon">
          <div className="discountdiv">
            <DiscountBadge value={discount} />
          </div>

          <div className="foodcard">
            <div className="imgitem">
              <img src={img} style={{ width: '150px' }} alt="" />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div>
            <p className="fruitset mt-2">
              <Link className="fruitset boldfont" to={`/products/${id}`} onClick={() => {window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' })}}>
                {name}
              </Link>
            </p>
            <p className="fruitprice">{price}</p>

            <p className="fruitline">{discountprice}</p>
          </div>
          <div className="mt-1">
            {itemFoundInCart ? (
              <div>
                <button
                  className="btn-minus"
                  onClick={() => handleRemove(itemFoundInCart)}
                >
                  {' '}
                  -{' '}
                </button>
                <span>{itemFoundInCart.qty}</span>{' '}
                <button className="btn-plus" onClick={() => handleAdd(product, itemFoundInCart)}>
                  {' '}
                  +{' '}
                </button>
              </div>
            ) : (
              <button
                className="addtocart"
                style={{ fontSize: '11pt', padding: '5px 8px' }}
                onClick={() => handleAdd(product, itemFoundInCart)}
              >
                <FiPlus className="minman" /> Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default FoodItem
