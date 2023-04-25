import { createRoot } from "react-dom";
import { InboxOutlined } from "@ant-design/icons";
import Upload from "antd/lib/upload";
import Dragger from "antd/lib/upload/Dragger";
import { message } from "antd";

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const App = () => (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined style={{ color: "hotpink" }} />
    </p>
    <p className="ant-upload-text" style={{ color: "white" }}>
      Click or drag your playlist to this area to upload
    </p>
    <p className="ant-upload-hint" style={{ color: "white" }}>
      Support for a single or bulk upload. Strictly prohibited from uploading
      company data or other banned files.
    </p>
  </Dragger>
);

const IndexPage = () => {
  return <App />;
};

export default IndexPage;
