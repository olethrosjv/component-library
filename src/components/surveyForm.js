import React from "react"


export default () => (
//const SurveyForm = () => (
 
    
    <div class="container">
    <header class="header">
      <h1 id="title" class="text-center">Customer Survey</h1>
      <h2 class="text-center">Joe's Ice Cream </h2>
      <p id="description" class="description text-center">
        Thank you for taking the time to help us improve our service
      </p>
    </header>
    <form id="survey-form">
      <div class="form-group">
        <label id="name-label" for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          class="form-control"
          placeholder="Name"
          required
        />
      </div>
      <div class="form-group">
        <label id="email-label" for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          class="form-control"
          placeholder="Email"
          required
        />
      </div>
      <div class="form-group">
        <label id="number-label" for="number"
          >Age<span class="clue">(optional)</span></label
        >
        <input
          type="number"
          name="age"
          id="number"
          min="10"
          max="99"
          class="form-control"
          placeholder="Age"
        />
      </div>
      <div class="form-group">
        <p>How often do you visit Joe's?</p>
        <select id="dropdown" name="visits" class="form-control" required>
          <option disabled selected value>Select the best option</option>
          <option value="moreThanOnce">More than Once a Week</option>
          <option value="onceWeek">Once a Week</option>
          <option value="monthly">Every Month</option>
          <option value="never">I never visit Joe's</option>
          <option value="other">Other</option>
        </select>
      </div>
  
      <div class="form-group">
        <p>Would you recommend us to a friend?</p>
        <label>
          <input
            name="user-recommend"
            value="definitely"
            type="radio"
            class="input-radio"
            checked
          />Definitely</label
        >
        <label>
          <input
            name="user-recommend"
            value="maybe"
            type="radio"
            class="input-radio"
          />Maybe</label
        >
  
        <label
          ><input
            name="user-recommend"
            value="not-sure"
            type="radio"
            class="input-radio"
          />Not sure</label
        >
      </div>
  
      <div class="form-group">
        <p>
          What is your favorite menu item at Joe's?
        </p>
        <select id="most-like" name="mostLike" class="form-control" required>
          <option disabled selected value>Select an option</option>
          <option value="cones">Ice Cream Cones/Cups</option>
          <option value="yogurt">Shakes/Smoothies</option>
          <option value="sandwiches">Ice Cream Sandwiches</option>
          <option value="other">Other</option>
        </select>
      </div>
  
      <div class="form-group">
        <p>
          What would you like to see us improve?
          <span class="clue">(Check all that apply)</span>
        </p>
  
        <label
          ><input
            name="prefer"
            value="more-flavors"
            type="checkbox"
            class="input-checkbox"
          />More Flavors</label
        >
        <label>
          <input
            name="prefer"
            value="customer-service"
            type="checkbox"
            class="input-checkbox"
          />Customer Service</label
        >
        <label
          ><input
            name="prefer"
            value="better-prices"
            type="checkbox"
            class="input-checkbox"
          />Better Prices</label
        >
        <label
          ><input
            name="prefer"
            value="business-hours"
            type="checkbox"
            class="input-checkbox"
          />Business Hours</label
        >
        <label
          ><input
            name="prefer"
            value="more-seating"
            type="checkbox"
            class="input-checkbox"
          />More Seating</label
        >
        <label
          ><input
            name="prefer"
            value="more-locations"
            type="checkbox"
            class="input-checkbox"
          />More Locations</label
        >
        <label
          ><input
            name="prefer"
            value="bike-parking"
            type="checkbox"
            class="input-checkbox"
          />Bike Parking</label
        >
        
      </div>
  
      <div class="form-group">
        <p>Any comments or suggestions?</p>
        <textarea
          id="comments"
          class="input-textarea"
          name="comment"
          placeholder="Enter your comments here..."
        ></textarea>
      </div>
  
      <div class="form-group">
        <button type="submit" id="submit" class="submit-button">
          Submit
        </button>
      </div>
    </form>
  </div>

  
)

export default SurveyForm