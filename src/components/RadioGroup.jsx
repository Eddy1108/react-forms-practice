
function RadioGroup({formData, setFormData}) {
  return (
    <div className="form__radio-group">
    <p>How do you want to be contacted? </p>
    <label>
      <input type="radio" name="contact" value="phone" onChange={(change) => setFormData({...formData, contactType: change.target.value})} 
      checked = {formData.contactType === "phone"}/>
      Phone
    </label>

    <label>
      <input type="radio" name="contact" value="email" onChange={(change) => setFormData({...formData, contactType: change.target.value})}
      checked = {formData.contactType === "email"}/>
      Email
    </label>

    <label>
      <input type="radio" name="contact" value="post" onChange={(change) => setFormData({...formData, contactType: change.target.value})}
      checked = {formData.contactType === "post"}/>
      Slow Mail
    </label>

    <label>
      <input type="radio" name="contact" value="none" onChange={(change) => setFormData({...formData, contactType: change.target.value})}
      checked = {formData.contactType === "none"}/>
      No contact!
    </label>
  </div>
  )
}

export default RadioGroup