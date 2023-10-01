import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img
        className="writeImg"
         src="https://img.freepik.com/free-photo/fingers-note-report-journalist-filling_1150-1044.jpg?w=740&t=st=1696181845~exp=1696182445~hmac=07171adaab63b650d3721b6ab6614676db3314addfd85d7a90e395b1e650b179"
          alt="" 
        />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i class="fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea
                    placeholder="Tell Something..." 
                    type="text" 
                    className="writeInput writeText">
                </textarea>
            </div>
            <button className="writeSubmit">Done</button>
        </form>
    </div>
  )
}

