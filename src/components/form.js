import React from "react"

export default () => 
<div style={{ width: `80%`, margin: `2.5rem auto 0 auto`, background: `linear-gradient(115deg, rgb(41, 41, 83), rgb(80, 68, 214))`, color: `white` }}>
    <header style={{ padding: `0 0.625rem`, marginBottom: `1.875rem`, textAlign: `center` }}>
      <h1>Customer Survey</h1>
      <h2>Joe's Ice Cream </h2>
      <p style={{ fontStyle: `italic` }}>
        Thank you for taking the time to help us improve our service
      </p>
    </header>
    <form style={{ width: `90%`, margin: `auto`, background: `rgba(27, 27, 50, 0.8)`, padding: `2.5rem 0.625rem`, borderRadius: `.25rem` }}>
      <div style={{ margin: `0 auto 1.25rem auto`, padding: `.25rem` }}>
        <label id="name-label" for="name" style={{ display: `flex`, alignItems: `center`, fontSize: `1.125rem`, marginBottom: `.5rem` }}>Name</label>
        <input
          type="text"
          name="name"
          id="name"
          class="form-control"
          placeholder="Name"
          required
        />
      </div>
      <div style={{ margin: `0 auto 1.25rem auto`, padding: `.25rem` }}>
        <label id="email-label" for="email" style={{ display: `flex`, alignItems: `center`, fontSize: `1.125rem`, marginBottom: `.5rem` }}>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          class="form-control"
          placeholder="Email"
          required
        />
      </div>
      <div style={{ margin: `0 auto 1.25rem auto`, padding: `.25rem` }}>
        <label id="number-label" for="number"
          style={{ display: `flex`, alignItems: `center`, fontSize: `1.125rem`, marginBottom: `.5rem` }}>Age<span class="clue">(optional)</span></label
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
      <div style={{ margin: `0 auto 1.25rem auto`, padding: `.25rem` }}>
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
  
      <div style={{ margin: `0 auto 1.25rem auto`, padding: `.25rem` }}>
        <p>Would you recommend us to a friend?</p>
        <label style={{ display: `flex`, alignItems: `center`, fontSize: `1.125rem`, marginBottom: `.5rem` }}>
          <input
            name="user-recommend"
            value="definitely"
            type="radio"
            class="input-radio"
            checked
          />Definitely</label
        >
        <label style={{ display: `flex`, alignItems: `center`, fontSize: `1.125rem`, marginBottom: `.5rem` }}>
          <input
            name="user-recommend"
            value="maybe"
            type="radio"
            class="input-radio"
          />Maybe</label
        >
  
        <label style={{ display: `flex`, alignItems: `center`, fontSize: `1.125rem`, marginBottom: `.5rem` }}
          ><input
            name="user-recommend"
            value="not-sure"
            type="radio"
            class="input-radio"
          />Not sure</label
        >
      </div>
  
      <div style={{ margin: `0 auto 1.25rem auto`, padding: `.25rem` }}>
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
  
      <div style={{ margin: `0 auto 1.25rem auto`, padding: `.25rem` }}>
        <p>
          What would you like to see us improve?
          <span class="clue">(Check all that apply)</span>
        </p>
  
        <label style={{ display: `flex`, alignItems: `center`, fontSize: `1.125rem`, marginBottom: `.5rem` }}
          ><input
            name="prefer"
            value="more-flavors"
            type="checkbox"
            class="input-checkbox"
          />More Flavors</label
        >
        <label style={{ display: `flex`, alignItems: `center`, fontSize: `1.125rem`, marginBottom: `.5rem` }}>
          <input
            name="prefer"
            value="customer-service"
            type="checkbox"
            class="input-checkbox"
          />Customer Service</label
        >
        <label style={{ display: `flex`, alignItems: `center`, fontSize: `1.125rem`, marginBottom: `.5rem` }}
          ><input
            name="prefer"
            value="better-prices"
            type="checkbox"
            class="input-checkbox"
          />Better Prices</label
        >
        <label style={{ display: `flex`, alignItems: `center`, fontSize: `1.125rem`, marginBottom: `.5rem` }}
          ><input
            name="prefer"
            value="business-hours"
            type="checkbox"
            class="input-checkbox"
          />Business Hours</label
        >
        <label style={{ display: `flex`, alignItems: `center`, fontSize: `1.125rem`, marginBottom: `.5rem` }}
          ><input
            name="prefer"
            value="more-seating"
            type="checkbox"
            class="input-checkbox"
          />More Seating</label
        >
        <label style={{ display: `flex`, alignItems: `center`, fontSize: `1.125rem`, marginBottom: `.5rem` }}
          ><input
            name="prefer"
            value="more-locations"
            type="checkbox"
            class="input-checkbox"
          />More Locations</label
        >
        <label style={{ display: `flex`, alignItems: `center`, fontSize: `1.125rem`, marginBottom: `.5rem` }}
          ><input
            name="prefer"
            value="bike-parking"
            type="checkbox"
            class="input-checkbox"
          />Bike Parking</label>
        
      </div>
  
      <div style={{ margin: `0 auto 1.25rem auto`, padding: `.25rem` }}>
        <p>Any comments or suggestions?</p>
        <textarea
          id="comments"
          class="input-textarea"
          name="comment"
          placeholder="Enter your comments here..."
         style={{ minHeight: `120px`, width: `80%` }}></textarea>
      </div>
  
      <div style={{ margin: `0 auto 1.25rem auto`, padding: `.25rem` }}>
        <button type="submit" id="submit" style={{ width: `80%`, alignContent: `center`, margin: `auto`, 
        background: `green`, fontSize: `1.5rem`, borderRadius: `2px`, padding: `.75rem`, cursor: `pointer` }}>
          Submit
        </button>
      </div>
    </form>
  </div>