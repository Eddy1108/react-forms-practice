
function ComplainBox({formData, setFormData}) {
  return (
    <label>
    Write your complaint
    <textarea
      name="complaint"
      rows="10"
      placeholder="You can complain here"
      onChange={(change) => setFormData({...formData, complaintText: change.target.value})}
      value={formData.complaintText}
    ></textarea>
  </label>
  )
}

export default ComplainBox