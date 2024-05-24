import React,{useState} from 'react'

export default function Text() {
    const[text,setText] = useState("Enter your name")

    const handlechange = (event)=>{
setText(event.target.value);
    }
   const handleclick = ()=>{
let newtext = text.toUpperCase();
setText(newtext);
   }

  return (
    <div>
      <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Text Area</label>
    <input type="email" className="form-control" value={text} id="exampleInputEmail1" onChange={handlechange}aria-describedby="emailHelp"/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
</form>
    </div>
  )
}
