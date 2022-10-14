import { useContext, useState } from "react";
import { Link } from "react-router-dom/dist";
import { CMSContext } from "../useContetful";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip
} from "@material-tailwind/react";
import debounce from "lodash/debounce"




export default function Art() {
  const { art } = useContext(CMSContext);
  console.log(art)
  return (
    <div className="">
      <div>art</div>
      {art.map((a) => (
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure><img src={a.fields.artworks[0].fields.file.url} alt="Album" width="480px" /></figure>
          <div className="card-body">
            <h2 className="card-title text-red-800 justify-center">{a.fields.title}</h2>
            <h3 className="card-title justify-center">{a.fields.artist}</h3>
            <p>{a.fields.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>

        /*  <Card className="w-96">
           <CardHeader onMouseEnter={() => console.log(a.fields.link)} floated={false} className="h-80">
             <img src={a.fields.artworks[0].fields.file.url}
             />
             <span className="badge">Badge</span>
           </CardHeader>
           <CardBody className="text-center">
             <Typography variant="h4" color="blue-gray" className="mb-2">
               {a.fields.title}
             </Typography>
             <Typography color="blue" className="font-medium" textGradient>
               {a.fields.artist}
             </Typography>
           </CardBody>
           <CardFooter className="flex justify-center gap-7 pt-2">
             <Tooltip content="Like">
               <Typography
                 as="a"
                 href="#facebook"
                 variant="lead"
                 color="blue"
                 textGradient
               >
                 <i className="fab fa-facebook" />
               </Typography>
             </Tooltip>
             <Tooltip content="Follow">
               <Typography
                 as="a"
                 href="#twitter"
                 variant="lead"
                 color="light-blue"
                 textGradient
               >
                 <i className="fab fa-twitter" />
               </Typography>
             </Tooltip>
             <Tooltip content="Follow">
               <Typography
                 as="a"
                 href="#instagram"
                 variant="lead"
                 color="purple"
                 textGradient
               >
                 <i className="fab fa-instagram" />
               </Typography>
             </Tooltip>
           </CardFooter>
         </Card> */
      ))}
    </div>
  );
}
