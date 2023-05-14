const dropZone = document.querySelector(".drop-zone");
const fileInput = document.querySelector("#fileInput");
const browseBtn = document.querySelector("#browseBtn");

const bgProgress = document.querySelector(".bg-progress");
const progressPercent = document.querySelector("#progressPercent");
const progressContainer = document.querySelector(".progress-container");
const progressBar = document.querySelector(".progress-bar");
const status = document.querySelector(".status");

const sharingContainer = document.querySelector(".sharing-container");
const copyURLBtn = document.querySelector("#copyURLBtn");
const fileURL = document.querySelector("#fileURL");
const emailForm = document.querySelector("#emailForm");

const toast = document.querySelector(".toast");

const baseURL = "https://easeshare-api.onrender.com";
const uploadURL = `${baseURL}/api/files`;

const maxAllowedSize = 100 * 1024 * 1024; //100mb

// Qr Code Generating
const qrInput = document.querySelector(".input-container input"),
generateBtn = document.querySelector(".sharing-container button"),
qrImg = document.querySelector(".qr-code img");

// Share Buttons
const whatsapp = document.querySelector(".whatsapp"),
gmail = document.querySelector(".gmail"),
telegram = document.querySelector(".telegram");

function Template (downloadLink) { 
  const template = `<!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Simple Transactional Email</title>
      <style>
        /* -------------------------------------
                      INLINED WITH htmlemail.io/inline
                  ------------------------------------- */
        /* -------------------------------------
                      RESPONSIVE AND MOBILE FRIENDLY STYLES
                  ------------------------------------- */
        @media only screen and (max-width: 620px) {
          table[class="body"] h1 {
            font-size: 28px !important;
            margin-bottom: 10px !important;
          }
          table[class="body"] p,
          table[class="body"] ul,
          table[class="body"] ol,
          table[class="body"] td,
          table[class="body"] span,
          table[class="body"] a {
            font-size: 16px !important;
          }
          table[class="body"] .wrapper,
          table[class="body"] .article {
            padding: 10px !important;
          }
          table[class="body"] .content {
            padding: 0 !important;
          }
          table[class="body"] .container {
            padding: 0 !important;
            width: 100% !important;
          }
          table[class="body"] .main {
            border-left-width: 0 !important;
            border-radius: 0 ;
            border-right-width: 0 !important;
          }
          table[class="body"] .btn table {
            width: 100% !important;
          }
          table[class="body"] .btn a {
            width: 100% !important;
          }
          table[class="body"] .img-responsive {
            height: auto !important;
            max-width: 100% !important;
            width: auto !important;
          }
        }
  
        /* -------------------------------------
                      PRESERVE THESE STYLES IN THE HEAD
                  ------------------------------------- */
        @media all {
          .ExternalClass {
            width: 100%;
          }
          .ExternalClass,
          .ExternalClass p,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div {
            line-height: 100%;
          }
          .apple-link a {
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important;
          }
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
          }
          .btn-primary table td:hover {
            background-color: #34495e !important;
          }
          .btn-primary a:hover {
            background-color: #34495e !important;
            border-color: #34495e !important;
          }
        }
      </style>
    </head>
    <body
      class=""
      style="
        background-color: #f6f6f6;
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
        line-height: 1.4;
        margin: 0;
        padding: 0;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      "
    >
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="body"
        style="
          border-collapse: separate;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          width: 100%;
          background-color: #f6f6f6;
        "
      >
        <tr>
          <td
            style="font-family: sans-serif; font-size: 14px; vertical-align: top"
          >
            &nbsp;
          </td>
          <td
            class="container"
            style="
              font-family: sans-serif;
              font-size: 14px;
              vertical-align: top;
              display: block;
              margin: 0 auto;
              max-width: 580px;
              padding: 10px;
              width: 580px;
            "
          >
            <div
              class="content"
              style="
                box-sizing: border-box;
                display: block;
                margin: 0 auto;
                max-width: 580px;
                padding: 10px;
              "
            >
              <!-- START CENTERED WHITE CONTAINER -->
              <span
                class="preheader"
                style="
                  color: transparent;
                  display: none;
                  height: 0;
                  max-height: 0;
                  max-width: 0;
                  opacity: 0;
                  overflow: hidden;
                  mso-hide: all;
                  visibility: hidden;
                  width: 0;
                "
                >This is preheader text. Some clients will show this text as a
                preview.</span
              >
              <table
                class="main"
                style="
                  border-collapse: separate;
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  width: 100%;
                  background: #ffffff;
                  border-radius: 3px;
                "
              >
                <!-- START MAIN CONTENT AREA -->
                <tr>
                  <td
                    class="wrapper"
                    style="
                      font-family: sans-serif;
                      font-size: 14px;
                      vertical-align: top;
                      box-sizing: border-box;
                      padding: 20px;
                    "
                  >
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        border-collapse: separate;
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        width: 100%;
                      "
                    >
                      <tr>
                        <td
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            vertical-align: top;
                          "
                        >
                          <p
                            style="
                              font-family: sans-serif;
                              font-size: 14px;
                              font-weight: normal;
                              margin: 0;
                              margin-bottom: 15px;
                            "
                          >
                            Hello there,
                          </p>
                          <p
                            style="
                              font-family: sans-serif;
                              font-size: 14px;
                              font-weight: normal;
                              margin: 0;
                              margin-bottom: 15px;
                            "
                          >
                            Sender of this email has shared a file with you.
                          </p>
                          <p
                            style="
                              font-family: sans-serif;
                              font-size: 14px;
                              font-weight: normal;
                              margin: 0;
                              margin-bottom: 15px;
                            "
                          >
                            ・ Expires in 24 Hr.
                          </p>
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="btn btn-primary"
                            style="
                              border-collapse: separate;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              width: 100%;
                              box-sizing: border-box;
                            "
                          >
                            <tbody>
                              <tr>
                                <td
                                  align="left"
                                  style="
                                    font-family: sans-serif;
                                    font-size: 14px;
                                    vertical-align: top;
                                    padding-bottom: 15px;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    style="
                                      border-collapse: separate;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      width: auto;
                                    "
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style="
                                            font-family: sans-serif;
                                            font-size: 14px;
                                            vertical-align: top;
                                            background-color: #3498db;
                                            border-radius: 5px;
                                            text-align: center;
                                          "
                                        >
                                          <a
                                            href="${downloadLink}"
                                            target="_blank"
                                            style="
                                              display: inline-block;
                                              color: #ffffff;
                                              background-color: #3498db;
                                              border: solid 1px #3498db;
                                              border-radius: 5px;
                                              box-sizing: border-box;
                                              cursor: pointer;
                                              text-decoration: none;
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin: 0;
                                              padding: 12px 25px;
                                              text-transform: capitalize;
                                              border-color: #3498db;
                                            "
                                            >Download file</a
                                          >
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <p
                            style="
                              font-family: sans-serif;
                              font-size: 14px;
                              font-weight: normal;
                              margin: 0;
                              margin-bottom: 15px;
                            "
                          >
                            Thank you for using EaseShare service.
                          </p>
                          <p
                            style="
                              font-family: sans-serif;
                              font-size: 14px;
                              font-weight: normal;
                              margin: 0;
                              margin-bottom: 15px;
                            "
                          >
                            Good luck! Hope it works.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
  
                <!-- END MAIN CONTENT AREA -->
              </table>
  
              <!-- START FOOTER -->
              <div
                class="footer"
                style="
                  clear: both;
                  margin-top: 10px;
                  text-align: center;
                  width: 100%;
                "
              >
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    border-collapse: separate;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    width: 100%;
                  "
                >
                  <tr>
                    <td
                      class="content-block"
                      style="
                        font-family: sans-serif;
                        vertical-align: top;
                        padding-bottom: 10px;
                        padding-top: 10px;
                        font-size: 12px;
                        color: #999999;
                        text-align: center;
                      "
                    >
                      <span
                        class="apple-link"
                        style="
                          color: #999999;
                          font-size: 12px;
                          text-align: center;
                        "
                        >EaseShare inc. main street 08, Moscow</span
                      >
                      <br />
                      Want to share a file?
                      <a
                        href="https://anandk008.github.io/easeShare"
                        style="
                          text-decoration: underline;
                          color: #999999;
                          font-size: 12px;
                          text-align: center;
                        "
                        >EaseShare</a
                      >.
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="content-block powered-by"
                      style="
                        font-family: sans-serif;
                        vertical-align: top;
                        padding-bottom: 10px;
                        padding-top: 10px;
                        font-size: 12px;
                        color: #999999;
                        text-align: center;
                      "
                    >
                      
                    </td>
                  </tr>
                </table>
              </div>
              <!-- END FOOTER -->
  
              <!-- END CENTERED WHITE CONTAINER -->
            </div>
          </td>
          <td
            style="font-family: sans-serif; font-size: 14px; vertical-align: top"
          >
            &nbsp;
          </td>
        </tr>
      </table>
    </body>
  </html>
  ` ;
  return template;
};


browseBtn.addEventListener("click", () => {
  fileInput.click();
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  //   console.log("dropped", e.dataTransfer.files[0].name);
  const files = e.dataTransfer.files;
  if (files.length === 1) {
    if (files[0].size < maxAllowedSize) {
      fileInput.files = files;
      uploadFile();
    } else {
      showToast("Max file size is 100MB");
    }
  } else if (files.length > 1) {
    showToast("You can't upload multiple files");
  }
  dropZone.classList.remove("dragged");
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.classList.add("dragged");

  // console.log("dropping file");
});

dropZone.addEventListener("dragleave", (e) => {
  dropZone.classList.remove("dragged");

  console.log("drag ended");
});

// file input change and uploader
fileInput.addEventListener("change", () => {
  if (fileInput.files[0].size > maxAllowedSize) {
    showToast("Max file size is 100MB");
    fileInput.value = ""; // reset the input
    return;
  }
  uploadFile();
});

// sharing container listenrs
copyURLBtn.addEventListener("click", () => {
  fileURL.select();
  document.execCommand("copy");
  showToast("Copied to clipboard");
});

fileURL.addEventListener("click", () => {
  fileURL.select();
});

const uploadFile = () => {
  console.log("file added uploading", uploadURL);

  files = fileInput.files;
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("myfile", file);

  //show the uploader
  progressContainer.style.color = "#000";
  progressContainer.style.display = "block";

  // upload file
  const xhr = new XMLHttpRequest();



  // listen for upload progress
  xhr.upload.onprogress = function (event) {
    // find the percentage of uploaded
    let percent = Math.round((100 * event.loaded) / event.total);
    progressPercent.innerText = percent;
    progressContainer.style.color = "#fff";
    const scaleX = `scaleX(${percent / 100})`;
    bgProgress.style.transform = scaleX;
    progressBar.style.transform = scaleX;
  };

  // handle error
  xhr.upload.onerror = function () {
    showToast(`Error in upload: ${xhr.status}.`);
    fileInput.value = ""; // reset the input
  };

  // listen for response which will give the link
  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      onFileUploadSuccess(xhr.responseText);
    }
  };

  xhr.open("POST", uploadURL);
  xhr.send(formData);
  console.log('Sent')
};

const shareGenerator = () => {
  let qrVal = qrInput.value;
  if(!qrVal) return;

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrVal}`;

  whatsapp.href = `https://web.whatsapp.com/send?text=${qrVal}`;
  telegram.href = `https://t.me/share/url?url=${qrVal}&text=Checkout%20this%20link%20To%20share%20file%20with%20you%20using%20EaseShare%20!!`;

  const tp = Template(qrVal);
  gmail.href = `mailto:?subject=EaseShare%20User%20has%20Shared%20file%20with%20you&body=${tp}`;
}


const onFileUploadSuccess = (res) => {
  fileInput.value = ""; // reset the input
  status.innerText = "Uploaded";

  progressContainer.style.display = "none"; // hide the box

  const { file: url } = JSON.parse(res);
  // console.log(url);
  sharingContainer.style.display = "block";
  fileURL.value = url;
  shareGenerator();

  // `https://web.whatsapp.com/send?text=${qrval}`
  // console.log(qrImg.src)
};


let toastTimer;
// the toast function
const showToast = (msg) => {
  clearTimeout(toastTimer);
  toast.innerText = msg;
  toast.classList.add("show");
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
};
