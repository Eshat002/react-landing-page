import React from 'react'
import './Ingredient.css'
import Ingredient1 from '../../img/ingredient1.1.png'
import Ingredient2 from '../../img/ingredient2.png'
import Ingredient3 from '../../img/ingredient3.png'
import Ingredient4 from '../../img/ingredient4.png'
import WhiteCookies from '../../img/white-cookies.png'




const Ingredient = () => {
  return (
    <div className="ingredient">
      <div className="container">
        <div className="row">
          <div className="col-lg"></div>
          <div className="col-lg-11">
            <h1 className="headline">Quality Ingredients</h1>
            <p className="text">All of our products are baked with better-for you, allergy-friendly ingredients like buckwheat, cassava, oats, and cinnamon so those with allergies and without can enjoy and share with
              confidence.</p>
            <div className="ingredient-container">
              <div>
                <img style={{ width: "100%" }} src={Ingredient1} alt="ingredient1" />
              </div>
              <div>
                <img style={{ width: "95%", marginTop: "-15px" }} src={Ingredient2} alt="ingredien2" />
              </div>
              <div>
                <img style={{ width: "100%" }} src={Ingredient3} alt="ingredien3" />
              </div>
              <div>
                <img style={{ width: "100%" }} src={Ingredient4} alt="ingredient4" />
              </div>
            </div>
          </div>
          <div className="col-lg"></div>
        </div>
      </div>
      <img className='white-cookies' src={WhiteCookies} alt="white-cookies" />
    </div>
  )
}

export default Ingredient
