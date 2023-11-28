import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react';
import * as Yup from 'yup';
import '../allcss/candidate.css'
import styles from '../Styles';
import logo from '../assets/logowht.png'

const validationSchema = Yup.object().shape({
  recruiter_name: Yup.string()
    .min(2, 'Too short!')
    .max(20, 'too Long!')
    .required('Full name is required'),
  first_name: Yup.string()
    .min(2, 'Too short!')
    .max(20, 'too Long!')
    .required('First name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('email is required'),
  phnum: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
}
)
const Candidate = () => {
  const recuiterOptions = ['Select', 'Pushpanjali', 'Rajlaxmi', 'Rituparna', 'Intern'];
  const initialValues = {
    company_name: '',
    jd: '',
    recruiter_name: '',
    first_name: '',
    last_name: '',
    email: '',
    alt_email: '',
    phnum: '',
    alt_phnum: '',
    current_location: '',
    expected_location: '',
    current_company: '',
    current_designation: '',
    YOE: '',
    notice_period: '',
    current_ctc: '',
    expected_ctc: '',
    pan_no: '',
    middle_name: '',
    certification: '',
    adhara_card: '',
    high_qualification: '',
    dob: '',
    comments: '',
    skill_list: ''
  };

  const handelSubmit = (values, { resetForm }) => {
    console.log(values);
    const formData = new FormData();
    formData.append("CompanyName", values.company_name);
    formData.append("Jd", values.jd);
    formData.append("RecruiterName", values.recruiter_name);
    formData.append("FirstName", values.first_name);
    formData.append("LastName", values.last_name);
    formData.append("Email", values.email);
    formData.append("AltEmail", values.alt_email);
    formData.append("Phnum", values.phnum);
    formData.append("AltPhnum", values.alt_phnum);
    formData.append("DOB", values.dob);
    formData.append("HighQual", values.high_qualification);
    formData.append("CurrentLoc", values.current_location);
    formData.append("ExpLoc", values.expected_location);
    formData.append("CurrentCompany", values.current_company);
    formData.append("CurrentDesg", values.current_designation);
    formData.append("YOE", values.YOE);
    formData.append("NoticePeriod", values.notice_period);
    formData.append("CurrentCTC", values.current_ctc);
    formData.append("ExpectedCTC", values.expected_ctc);
    formData.append("PanNO", values.pan_no);
    formData.append("MiddleName", values.middle_name);
    formData.append("Certification", values.certification);
    formData.append("AdharaCard", values.adhara_card);
    formData.append("Comments", values.comments);
    formData.append("Skills", values.skill_list);

    fetch(
      "https://script.google.com/macros/s/AKfycbwyBSWcvNtvbe3JeLSUTDFjvASXMm2xAjnIv0ekBHTC4osQ2UwHKPIwPnatjLXZ-tKYJQ/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Form data submitted successfully.");
          alert("Form data submitted successfully.");

        } else {
          alert("Failed to submit form data.");
        }
      })
      .catch((error) => {
        console.error("An error occurred while submitting the form:", error);
      });
    resetForm();


  }

  return (
    <div className={` bg-black overflow-hidden w-full  h-[1280px] pipeline `}>
      <div className={`${styles.paddingX} ${styles.flexCenter} z-[3]`}>
        <div className={`${styles.boxWidth} items-center justify-items-center`}>
          <div className='flex flex-row shadow-lg shadow-blue-500 mt-3 text-center'>
            <img style={{
              height: '8vh',
              width: '15%',
              float: 'left'
            }} src={logo} alt='image1'></img>
            <h1 className='font-poppins text-blue-500 text-4xl w-[70%] '>

              Candidate Details
            </h1>

          </div>
          <div className={`text-white font-poppins text-[16px] border-2 mt-10 h-fit bg-blue-900 shadow-lg shadow-blue-500  items-center overflow-hidden ${styles.boxWidth}`}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handelSubmit}>

              <Form className="Login-form">
                <div className='state-dist'>
                  <label htmlFor="recruiter_name">Recruiter Name:  *
                    <Field as="select" name="recruiter_name" className="User-DropDown">
                      {recuiterOptions.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                  </label>
                </div>
                <div className="form_row">
                  <div className="form-divider">
                    <label htmlFor="company_name"> Company Name
                      <Field type="text" id="company_name" placeholder="Enter your first name" name="company_name" />
                    </label>
                    <br />
                    <hr />
                    <br />
                    <label htmlFor="first_name"> Candidate Full Name  *
                      <Field type="text" id="first_name" placeholder="Enter your first name" name="first_name" />
                      <ErrorMessage name="first_name" className='error' component="div" />
                    </label>
                    <label htmlFor="email"> Email  *
                      <Field type="email" id="email" placeholder="Youremail@gmail.com" name="email" />
                      <ErrorMessage name="email" className='error' component="div" />
                    </label>
                    <label htmlFor="alt_email"> Alternate Email
                      <Field type="email" id="alt_email" placeholder="Youremail@gmail.com" name="alt_email" />
                      <ErrorMessage name="alt_email" className='error' component="div" />
                    </label>
                    <label htmlFor="pan_no"> PAN NO.
                      <Field type="text" id="pan_no" placeholder="Enter your first name" name="pan_no" />
                      <ErrorMessage name="pan_no" className='error' component="div" />
                    </label>
                    <label htmlFor="current_location ">Current Location
                      <Field type="text" id="current_location" placeholder="Enter your current location" name="current_location" />
                      <ErrorMessage name="current_location" className='error' component="div" />
                    </label>
                    <label htmlFor="current_company">Current Company
                      <Field type="text" id="current_company" placeholder="Enter your current company" name="current_company" />
                      <ErrorMessage name="current_company" className='error' component="div" />
                    </label>
                    <label htmlFor="YOE">  Year Of Experience
                      <Field type="number" id="YOE" placeholder="Enter your year of Experience" name="YOE" />
                      <ErrorMessage name="YOE" className='error' component="div" />
                    </label>
                    <label htmlFor="current_ctc"> Current CTC
                      <Field type="number" id="current_ctc" placeholder="Enter your current ctc" name="current_ctc" />
                      <ErrorMessage name="current_ctc" className='error' component="div" />
                    </label>
                    <label htmlFor="certification">Any Certification
                      <Field
                        as="textarea"
                        id="certification"
                        name="certification"
                        className=' h-[3rem] text-black mt-4 mb-4 rounded'
                        placeholder='Add any certification  here'
                      />
                    </label>
                    <label htmlFor="comments"> Add Comments:
                      <Field
                        as="textarea"
                        id="comments"
                        name="comments"
                        className=' h-[3rem] text-black mt-4 mb-4 rounded'
                        placeholder='Add any comments here'
                      />
                    </label>
                  </div>
                  <div className="form-divider">
                    <label htmlFor="jd"> Jd
                      <Field type="text" id="jd" placeholder="Enter your first name" name="jd" />
                    </label>
                    <br />
                    <hr />
                    <br />
                    <label htmlFor="dob"> DOB
                      <Field type="date" id="dob" placeholder="Enter your DOB" name="dob" />


                      <ErrorMessage name="dob" className='error' component="div" />
                    </label>
                    <label htmlFor="adhara_card"> Adhara card
                      <Field type="number" id="adhara_card" placeholder="Enter your phone number" name="adhara_card" />
                      <ErrorMessage name="adhara_card" className='error' component="div" />
                    </label>

                    <label htmlFor="phnum"> Phone no. *
                      <Field type="number" id="phnum" placeholder="Enter your phone number" name="phnum" />
                      <ErrorMessage name="phnum" className='error' component="div" />
                    </label>
                    <label htmlFor="alt_phnum"> Alternate Phone no.
                      <Field type="number" id="alt_phnum" placeholder="Enter your alternate phone num" name="alt_phnum" />
                      <ErrorMessage name="alt_phnum" className='error' component="div" />
                    </label>
                    <label htmlFor="expected_location">Expected Location
                      <Field type="text" id="expected_location" placeholder="Enter your expected location" name="expected_location" />
                      <ErrorMessage name="expected_location" className='error' component="div" />
                    </label>
                    <label htmlFor="current_designation">Current Designation
                      <Field type="text" id="current_designation" placeholder="Enter your current designation" name="current_designation" />
                      <ErrorMessage name="current_designation" className='error' component="div" />
                    </label>
                    <label htmlFor="notice_period"> Notice Period
                      <Field type="text" id="notice_period" placeholder="Enter your notice period" name="notice_period" />
                      <ErrorMessage name="notice_period" className='error' component="div" />
                    </label>
                    <label htmlFor="expected_ctc"> Expected CTC
                      <Field type="text" id="expected_ctc" placeholder="Enter your Expected ctc" name="expected_ctc" />
                      <ErrorMessage name="expected_ctc" className='error' component="div" />
                    </label>
                    <label htmlFor="high_qualification"> Highest Qualification
                      <Field type="text" id="high_qualification" placeholder="Enter your highest qualification" name="high_qualification" />
                      <ErrorMessage name="high_qualification" className='error' component="div" />
                    </label>

                    <label htmlFor="skill_list">Skill List:
                      <Field
                        as="textarea"
                        id="skill_list"
                        name="skill_list"
                        className=' h-[3rem] text-black mt-4 mb-4 rounded'
                        placeholder='Add any skills here'
                      />
                    </label>
                  </div>
                </div>
                <button type="submit" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-lg text-xl px-4 py-2.5 text-center mr-2 mb-2 font-semibold">Submit</button>
              </Form>

            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Candidate
