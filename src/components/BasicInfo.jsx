
function BasicInfo({formData, setFormData}) {
  return (
    <div className="form__section-left">
    <label>
      Full name
      <input type="text" name="name" required onChange={(change) => setFormData({...formData, name: change.target.value})}
      value={formData.name}/>
    </label>
    <label>
      Address
      <input type="text" name="address" onChange={(change) => setFormData({...formData, address: change.target.value})}
      value={formData.address}/>
    </label>
    <label>
      Phone Number
      <input type="tel" name="phone" onChange={(change) => setFormData({...formData, phone: change.target.value})}
      value={formData.phone}/>
    </label>

    <label>
      Email
      <input type="email" name="email" onChange={(change) => setFormData({...formData, email: change.target.value})}
      value={formData.email} />
    </label>
  </div>
  )
}

export default BasicInfo

//rfce