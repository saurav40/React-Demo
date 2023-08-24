import React from 'react'

export default function Textform() {
  return (
    <form>
    <label>
      Name:
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
    <textarea>
  Hello there, this is some text in a text area
</textarea>
  </form>
  )
}
