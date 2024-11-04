import React from "react";
import NotFound from "@/app/not-found";
import { notFound } from "next/navigation";

import { Metadata } from "next";
import { resolve } from "path";

type Props = {
  params: { reviewID: string; id: string };
};

// Ensure the function name is `generateMetadata`
// export const generateMetadata = async({ params }: { params: { id: string } }): Promise<Metadata> => {
//   let title = await new Promise((resolve)=>{
//     setTimeout(()=>resolve(`iphone ${params.id}`), 1000)
//   })
//   return {
//     title: `Product ${title}`,
//   };
// };


async function productReviews({
  params,
}: {
  params: { reviewID: string; id: string };
}) {
  let { reviewID } = await params;
  let { id } = await params;

  if (parseInt(reviewID) > 1000) {
    return notFound();
  } else {
    return (
      <div>
        <p>
          Product Reviews of Product ID: {id} and with review ID = {reviewID}
        </p>
      </div>
    );
  }
}

export default productReviews;
