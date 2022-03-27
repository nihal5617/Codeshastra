import { background, color } from '@chakra-ui/react';
import { BorderAllRounded } from '@material-ui/icons';
import React from 'react';
import Tesseract from 'tesseract.js';
import "./orcAttendance.css"

// import './style.css';

const OcrAttendance = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [image, setImage] = React.useState('');
  const [text, setText] = React.useState('');
  const [progress, setProgress] = React.useState(0);

  const handleSubmit = () => {
    setIsLoading(true);
    Tesseract.recognize(image, 'eng', {
      logger: (m) => {
        console.log(m);
        if (m.status === 'recognizing text') {
          setProgress(parseInt(m.progress * 100));
        }
      },
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        console.log(result.data);
        setText(result.data.text);
        setIsLoading(false);
      });
  };

  return (
    <div className="container" style={{ height: '100vh',width:"80%",padding:"30px", backgroundColor:'ffffff',  borderRadius :'20px ', boxShadow:'10px #9E9E9E'}}>
      <div className="row h-100">
        <div className="col-md-5 mx-auto h-100 d-flex flex-column justify-content-center">
          {!isLoading && (
            <h1 className="text-center heading py-5 mc-5">OCR Detection of Attendance</h1>
          )}
          {isLoading && (
            <>
              <progress className="form-control" value={progress} max="100">
                {progress}%{' '}
              </progress>{' '}
              <p className="text-center py-0 my-0">Converting:- {progress} %</p>
            </>
          )}
          {!isLoading && !text && (
            <>
              <input
                type="file"
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
                className="form-control mt-5 mb-2"
              />
              <div className="bottom">
              <input
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary mt-5"
                value="Convert"
              />
              </div>
              
            </>
          )}
          {!isLoading && text && (
            <>
              <textarea
                className="form-control w-100 mt-5"
                rows="30"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OcrAttendance;
