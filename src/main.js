import React from "react";
import HornedBeast from "./HornedBeast";


class Main extends React.Component{
    render() {
        return (
            <div>
                {/* <HornedBeast /> */}
                {/* <HornedBeast /> */}
                <HornedBeast title= 'beast' src="https://c8.alamy.com/comp/MTN8D5/horned-beast-illustration-MTN8D5.jpg" alt='Horned beast' description='Just a beast from google' />
                <HornedBeast title= 'Dear' src="https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/side_image/public/thumbnails/image/White-tailed_deer.jpg?itok=Qu1l-JBS" alt='dear' description=' friendly looking dear' />
                

            </div>
        );
    }
}
export default Main;