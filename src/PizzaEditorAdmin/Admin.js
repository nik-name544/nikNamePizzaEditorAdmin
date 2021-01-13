import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("thumbnail", data.thumbnail[0]);
    formData.append("name", data.name);
    formData.append("slug", data.slug);
    formData.append("price", data.price);
    formData.append("category", data.category);
    const res = fetch("https://dzs9l.sse.codesandbox.io/ingredients", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
     console.log(res)
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          name
          <input ref={register} type="text" name="name" id="name" />
        </label>
        <br />
        <label>
          slug
          <input ref={register} type="text" name="slug" id="slug" />
        </label>
        <br />
        <label>
          price
          <input ref={register} type="tel" name="price" id="price" />
        </label>
        <br />
        <label>
          category
          <select ref={register} name="category" id="category">
            <option value="cheese">cheese</option>
            <option value="vegetables">vegetables</option>
            <option value="meat">meat</option>
            <option value="sauce">sauce</option>
            <option value="dough">dough</option>
            <option value="size">size</option>
          </select>
        </label>
        <br />
        <label>
          image
          <input ref={register} type="file" name="image" id="image" />
        </label>
        <br />
        <label>
          thumbnail
          <input ref={register} type="file" name="thumbnail" id="thumbnail" />
        </label>
        <br />
        <button>send</button>
      </form>
    </>
  );
}
