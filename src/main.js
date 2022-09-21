import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./assets/data.json";


class Main extends React.Component{
    render() {
        return (
            <div>
              {data.map(beast => {
                return <HornedBeast src={beast.image_url} title={beast.title} discription={beast.description} keyword={beast.keyword} horns={beast.horns} />
              })} 
              
                

            </div>
        );
    }
}
export default Main;