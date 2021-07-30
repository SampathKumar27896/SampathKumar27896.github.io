import { useEffect } from 'react';

const Container = (props) => {
    useEffect(() => {
        let outerContainer = document.getElementById("flex-container");
        let scrollValue = outerContainer.offsetWidth * (10 / 100);
        outerContainer.addEventListener("wheel", function (e) {
          if (e.deltaY > 0) {
            outerContainer.scrollLeft += scrollValue;
          } else {
            outerContainer.scrollLeft += -scrollValue;
          }
        })
    },[])
    return(
        <div id="outer-container">
            <div id="flex-container">
                {props.children}
            </div>
        </div>
    )
}

export default Container;