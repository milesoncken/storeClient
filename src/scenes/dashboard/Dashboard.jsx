import { Typography, Box, Button, InputAdornment } from "@mui/material";
import React from "react";
import { shades } from "../../theme";
import { ErrorMessage, Formik } from "formik";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useLocalState } from "../../state/useLocalStorage";
import Dropzone from "react-dropzone";
import { useDropzone } from "react-dropzone";
import { useEffect } from "react";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

function Dashboard() {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [price, setPrice] = useState(null);
  const [shortDescription, setDescription] = useState(null);
  const [longDescription, setLongDescription] = useState(null);
  const [image, setImage] = useState(null);

  const [item, setItem] = useState(null);

  const [error, setError] = useState("");
  const [jwt, setJwt] = useLocalState("", "jwt");

  const submitItem = (token) => {
    console.log(item);
    if (item != null) {
      if (name == null || "") {
        setError("Product has no name");
      } else if (price == null || "") {
        setError("Product has no price");
      } else if (quantity == null || "") {
        setError("Product has no quantity");
      } else if (shortDescription == null || "") {
        setError("Product has no description");
      } else if (longDescription == null || "") {
        setError("Product has no longDescription");
      } else {
        setError("");
        console.log(item);
        fetch("/api/products", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token, item }),
        })
          .then((res) => {
            if (res.status.valueOf === 401) {
              setError("Invalid Access Token");
            } else {
              console.log("not invalid");
              const formData = new FormData();
              formData.append("name", image);
              fetch("/api/upload", {
                method: "POST",
                body: formData,
              }).then((res) => {
                console.log(res);
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  const removeFile = (file) => () => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt={file.name} />
      </div>
      <button onClick={removeFile(file)}>Remove File</button>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <Box zIndex={1} left={0} width='100%' m='50px 0px'>
      <Typography variant='h1' sx={{ marginBottom: "15px", marginLeft: "0%" }}>
        Add a product
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "47%",
            margin: "0% 25%",
          }}>
          <Typography variant='h2' sx={{ marginBottom: "15px" }}>
            Product Details
          </Typography>
          <TextField
            fullWidth
            type='text'
            label='Product Name'
            name='name'
            onChange={(change) => {
              setName(change.target.value);
            }}
            sx={{ marginBottom: "15px" }}
          />
          <Box
            sx={{
              width: "100%",
              flex: 1,
              display: "flex",
              flexDirection: "row",
            }}>
            <TextField
              type='number'
              label='Price'
              name='price'
              onChange={(change) => {
                setPrice(change.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>$</InputAdornment>
                ),
              }}
              sx={{ marginBottom: "15px", marginRight: "1%", width: "50%" }}
            />
            <TextField
              type='number'
              label='Quantity'
              name='quantity'
              onChange={(change) => {
                setQuantity(change.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>#</InputAdornment>
                ),
              }}
              sx={{ marginBottom: "15px", marginLeft: "1%", width: "50%" }}
            />
          </Box>
          <TextField
            fullWidth
            type='text'
            label='Short Description'
            name='shortDescription'
            onChange={(change) => {
              setDescription(change.target.value);
            }}
            multiline
            minRows={1}
            maxRows={2}
            sx={{ marginBottom: "15px" }}
          />
          <TextField
            fullWidth
            type='text'
            label='Long Description'
            name='longDescription'
            onChange={(change) => {
              setLongDescription(change.target.value);
            }}
            multiline
            minRows={3}
            maxRows={4}
            sx={{ marginBottom: "15px" }}
          />
          {/* <Box sx={{ marginBottom: "15px", color: "red" }}></Box> */}
        </Box>
        <Box sx={{ width: "47%", margin: "0% 25%" }}>
          <Typography variant='h2' sx={{ marginBottom: "15px" }}>
            Upload an Image
          </Typography>

          {/* <img id='img' src='' width={100} height={100}></img> */}
          <input type='file' name='image' id='upload' onChange={(test) => {}} />

          {/* <Dropzone
            onDrop={(acceptedFiles) => {
              console.log(acceptedFiles);
              setFiles(
                acceptedFiles.map((file) =>
                  Object.assign(file, {
                    preview: URL.createObjectURL(file),
                  })
                )
              );
              setImage(files[0]);
            }}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or tap to select files</p>
                  <aside style={thumbsContainer}>{thumbs}</aside>
                </div>
              </section>
            )}
          </Dropzone> */}
        </Box>
      </Box>

      <Button
        fullWidth
        type='submit'
        color='primary'
        variant='contained'
        onClick={() => {
          setItem({
            name,
            price,
            quantity,
            shortDescription,
            longDescription,
          });
          setImage({ image });
          submitItem(jwt);
        }}
        sx={{
          backgroundColor: shades.primary[400],
          boxShadow: "none",
          color: "white",
          borderRadius: 0,
          width: "30%",
          margin: "0% 35%",
          padding: "15px 40px",
        }}>
        Add Item
      </Button>
      <Box sx={{ marginBottom: "15px", margin: "0% 35%", color: "red" }}>
        {/* {error} */}
      </Box>
    </Box>
  );
}

export default Dashboard;
