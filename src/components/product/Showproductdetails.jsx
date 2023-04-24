
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

const Showproductdetails = () => {
  const Navigate=useNavigate()
  // const dispatch = useDispatch();
  const { prodata } = useSelector((state) => state.productdata)

  var item = prodata[prodata.length - 1]

  
  function backtoplace() {
  Navigate("/products/electronics");
}

  return (
    <>
      <div className='productdiv'>
        <div className='productmaindiva'>

          <div className='categrydiv'>
            <h2>{ item.category }</h2>

            <div onClick={backtoplace}>
              <img src="https://img.icons8.com/emoji/256/back-arrow-emoji.png" alt="" />
            </div>
          </div>
          <div className='detailsSeconddiv'>
          
            <div className='imagediv'>
              <img src={ item.image } alt="" />
            </div>
            <div className='detailsofproducts'>
              <div className='paradiv'>
                <p className='title'>title: <span>{ item.title }</span></p>
                <p className='price'>price: <span>{ item.price }</span></p>
              </div>

              <div className='descriptiondiv'>
                <p className='desc'>description: <span>{ item.description }</span></p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Showproductdetails;
