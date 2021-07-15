function question_clicked(event) {
  if (event.target.getAttribute("bold") === "true") {
    event.target.setAttribute("bold", "false")
  }
  else if (event.target.getAttribute("bold") === "false") {
    event.target.setAttribute("bold", "true")
  }
}