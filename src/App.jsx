import React from 'react'
function App() {
  return (
  <div className='head'>
<div className='container'>
    <div className='container_head'>
      <h6>TESTIMONIALS</h6>
      <h4>What They Say</h4>
    </div>
    <div className='container_body'>
    <div className='item1'>
      <div className='icons'>
          <img src="foto1.png" />
      </div>
      <p>“Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”</p>
      <div className='finish'>
      <h4>George Lopez</h4>
      <span>Crypto Manager</span>
      </div>
    </div>
    <div className='item2'>
      <img src="testimonials-01.png" />
    </div>
    </div>
    
  </div>
  <div className='first'>
  <div className='first1'></div>
  <div className='first2'>
    <div className='contact'>
    <div className='text'>
    <h6>your freedom</h6>
    <h4>Get A Financial Plan</h4>
    </div>
<div className='box'>
<div className='gap'>
   <label for="name">Your Name</label>
    <input type="name" name="name" id="name" placeholder="" required=""></input>
</div>
<div className='gap'>
   <label for="email"> Your Email</label>
    <input type="email" name="name" id="name" placeholder="" required=""></input>
</div>
</div>
<div className='subject'>
<label for="name">Subject</label>
    <input type="name" name="name" id="name" placeholder="" required=""></input>
</div>
<div className='select'>
<label for="chooseOption" class="form-label">Your Reason</label>
<select name="Category">
                      <option selected="">Choose an Option</option>
                      <option type="checkbox" value="Online Banking">Online Banking</option>
                      <option value="Financial Control">Financial Control</option>
                      <option value="Yearly Profit">Yearly Profit</option>
                      <option value="Crypto Investment">Crypto Investment</option>
                  </select>
</div>
  </div>
  <div className='button'>
  <button className='btn'>Submit</button>
  </div>
   </div>
    </div>
  </div>
  )
}

export default App


