
function Consent({formData, setFormData}) {
  return (
    <label>
    I agree you take my data, and do whatever
    <input type="checkbox" name="consent" id="consent" onChange={(change) => setFormData({...formData, consent: change.target.checked})}
    checked={formData.consent}/>
  </label>
  )
}

export default Consent