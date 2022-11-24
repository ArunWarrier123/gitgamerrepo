import './DeveloperHomeDiv.css';

function DeveloperHomeDiv(props) {
    //let imglink = props.img_link;
    //console.log(imglink);
    return<>
    <div className='divnum1' style={{backgroundImage: "url(/images/div1background.png)"}}>
        <div className='textarea'>
            <div className='headertext'>{props.text1}<br></br>{props.text2}</div>
            <div className='undertext'>{props.subtext}
            </div>
        </div>
      </div>
    </>
    
}

export default DeveloperHomeDiv;