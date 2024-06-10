import React, { useRef, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ImageOutlined } from '@mui/icons-material';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../redux/store';

const ProfileForm = () => {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const formikRef = useRef();

  return (
    <Formik
      innerRef={formikRef}
      initialValues={{
        profilePhoto: '',
        firstName: '',
        lastName: '',
        email: '',
      }}
      validate={(values) => {
        const errors = {};

        // Validate for empty fields
        if (!values.firstName) {
          errors.firstName = 'Required';
        }
        if (!values.lastName) {
          errors.lastName = 'Required';
        }
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        return errors;
      }}
      onSubmit={(values) => {
          // Set the form data in the parent component state
          dispatch(updateUserData({
            profilePhoto: imagePreview || '',
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
          }));

          // Handle form submission logic here
          console.log(values);

 
         // Simulate email validation with a toast notification
         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
           toast.error('Invalid email address');
         } else {
           // Display success toast
           toast.success('Profile details saved successfully!');
         }
      }}
    >
      <Form >
        <div id="profilePhoto" className='bg-[#F0F0F0] flex justify-center items-center p-5 mx-4 gap-3 mt-2 mb-2 rounded-xl'>
          {/* Image preview div */}
          <h3 className="text-lg text-gray-600 basis-1/3">Profile picture</h3>
          <div id="profilePhoto"
            className="w-64 h-64 border-2 border-gray-400 hover:shadow-sm hover:shadow-purply  cursor-pointer relative rounded-xl"
            style={{
              backgroundImage: `url(${imagePreview})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Label for uploading image */}
            <label
              htmlFor="profilePhotoInput"
              className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
              <ImageOutlined style={{fontSize:40}}/>
              <span className="text-lg text-black font-semibold">Choose Image</span>
            </label>
          </div>

          {/* Hidden file input */}
          <Field
            type="file"
            id="profilePhotoInput"
            name="profilePhoto"
            accept="image/*"
            onChange={(event) => {
              const selectedFile = event.target.files[0];

              // Update the image preview
              if (selectedFile) {
                const previewUrl = URL.createObjectURL(selectedFile);
                setImagePreview(previewUrl);
              } else {
                setImagePreview(null);
              }

              // Handle file change logic if needed
              console.log(selectedFile);
            }}
            className="hidden"
          />

          {/* Label for information about image dimensions and formats */}
          <p className='text-base text-gray-600 mt-2 max-[500px]:hidden'>
            Image must be below 1024x1024px. <br />Use PNG, JPG, or BMP format.
          </p>
        </div>
          {/* User information input block starts here: */}
        <div id="userInformation" className='bg-[#F0F0F0] flex flex-col p-5 gap-3 mx-4 mt-7 mb-2 rounded-xl '>
          <div className='flex flex-row items-center justify-center'>
            <label htmlFor="firstName" className='basis-[40%] text-gray-600'>First Name</label>
            <ErrorMessage name="firstName" component="div" className="text-red-500  " />
            <Field
                type="text"
                id="firstName"
                name="firstName"
                className="p-2 border border-gray-400 focus:shadow-sm focus:shadow-purply focus:border-purply focus:outline-none rounded-lg basis-[60%]"
                />
          </div>
          <div className='flex flex-row items-center justify-center'>
          <label htmlFor="lastName" className='basis-[40%] text-gray-600'>Last Name</label>
          <ErrorMessage name="lastName" component="div" className="text-red-500" />
          <Field
            type="text"
            id="lastName"
            name="lastName"
            className="p-2 border border-gray-400 focus:shadow-sm focus:shadow-purply focus:border-purply focus:outline-none rounded-lg basis-[60%]"
          />
          </div>

          <div className='flex flex-row items-center justify-center'>
          <label htmlFor="email" className='basis-[40%] text-gray-600'>Email</label>
          <ErrorMessage name="email" component="div" className="text-red-500" />
          <Field
            type="email"
            id="email"
            name="email"
            className="p-2 border border-gray-400 focus:shadow-sm focus:shadow-purply focus:border-purply focus:outline-none rounded-lg basis-[60%]"
          />
          </div>
        </div>

        <div className="text-center absolute bottom-[-5] right-14 mt-3 ">
          <button
            type="submit"
            className='p-2 border-2 rounded-md hover:border-purply hover:text-purply hover:bg-white w-24 bg-purply text-white font-semibold'
          >Save</button>
        </div>
        
      </Form>
    </Formik>
  );
};

export default ProfileForm;
