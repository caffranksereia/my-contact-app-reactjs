import {
    createBrowserRouter, redirect, useLoaderData,
  } from "react-router-dom";
import App from "../App";
import { NewContacts } from "../NewContacts";
import { EditContact } from "../EditContact";
import { Modal } from "../Modal";
import { Home } from "../Home";
import { ContactServices } from "../services";

// export async function loader({id}) {
//   const contacts = await ContactServices.getUser(id);
//   return { contacts };
// }


// export async function action({ request, params }) {
//   const formData = await request.formData();
//   const updates = Object.fromEntries(formData);
//   await ContactServices.updateUser(params.contactId, updates);
//   return redirect(`/${params.contactId}/edit`);
// }
export const routers = createBrowserRouter([
    {
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
        {
            path: "/new",
            element: <NewContacts/>
          },
          {
            path: "/view",
            element: <Modal/>
          },
          {
            path: "/:id/edit",
            element: <EditContact/>,
          },

    ]
    }
  ]);