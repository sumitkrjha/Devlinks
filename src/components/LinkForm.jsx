import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { updateLinkData } from '../redux/store';
import linkChain from "../assets/linkChain.svg"

const LinkForm = () => {

  const dispatch = useDispatch();
  const linkData = useSelector((state) => state.linkData);
  

  const handleSubmit = (values, { setSubmitting }) => {
    // Simple validation
    if (!values.platform || !values.link) {
      // Show error toast
      toast.error('Please fill out all fields.');
      setSubmitting(false);
      return;
    }

    // Dispatch action to save link data to the Redux store
    dispatch(updateLinkData({platform: values.platform, link: values.link}));

    // Show success toast notification
    toast.success('Link saved successfully!');
    
  };

  // Filter out selected platforms from other links
  const filteredPlatforms = linkData.map((item) => item.platform);

  return (
    <div>
      <Formik
        initialValues={{ platform: '', link: '' }}
        onSubmit={handleSubmit}
      >
        <Form className='bg-[#F0F0F0] flex flex-col p-5 gap-3 mx-4 mt-2 mb-2 rounded-xl '>
          <div className="mb-4">
            <label htmlFor="platform" className="block text-sm font-base text-gray-700">
              Platform
            </label>
            <Field as="select" name="platform" className="mt-1 p-2 w-full border border-gray-400 focus:shadow-sm focus:shadow-purply focus:border-purply focus:outline-none rounded-lg">
              <option value="" disabled>
                Select Platform
              </option>
              <option value="Github" disabled={filteredPlatforms.includes('Github')} >GitHub</option>
              <option value="Linkedin" disabled={filteredPlatforms.includes('Linkedin')}>Linkedin</option>
              <option value="Youtube" disabled={filteredPlatforms.includes('Youtube')}>YouTube</option>
              {/* Add more options as needed */}
            </Field>
            <ErrorMessage name="platform" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="link" className="block text-sm font-base text-gray-700">
              Link
            </label>
            <div className="relative flex items-center">
              <img src={linkChain} alt="" className="h-5 w-5 absolute left-2 bottom-3"/>
              <Field
                type="text"
                name="link"
                className="mt-1 p-2 pl-8  w-full border border-gray-400 focus:shadow-sm focus:shadow-purply focus:border-purply focus:outline-none rounded-lg"
              />
              </div>
            <ErrorMessage name="link" component="div" className="text-red-500 text-sm" />
          </div>

          <button type="submit" className="p-2 border-2 rounded-md text-base font-semibold bg-purply  text-white
            hover:border-purply hover:bg-white hover:text-purply">
            Save
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LinkForm;