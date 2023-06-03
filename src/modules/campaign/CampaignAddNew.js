import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import { Button } from "components/button";
Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddNew = () => {
  const [content, setContent] = useState("");

  const { handleSubmit, control } = useForm();

  const handleAddNew = (value) => {
    console.log(value);
  };

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        // imgbbAPI
        upload: async (file) => {
          // const bodyFormData = new FormData();
          // bodyFormData.append("image", file);
          // const response = await axios({
          //   method: "post",
          //   url: imgbbAPI,
          //   data: bodyFormData,
          //   headers: {
          //     "Content-Type": "multipart/form-data",
          //   },
          // });
          // return response.data.data.url;
        },
      },
    }),
    []
  );

  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <h1 className="py-4 px-14 font-bold text-[25px] rounded-xl bg-text4 bg-opacity-10 inline-block mb-10">
          Start a Campaign 🚀
        </h1>
        <form onSubmit={handleSubmit(handleAddNew)}>
          <FormRow>
            <FormGroup>
              <Label className="text-start">Campaign Title *</Label>
              <Input
                control={control}
                name="title"
                placeholder="Write a title"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label className="text-start">Select a category *</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select a category"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option>Architecture</Dropdown.Option>
                  <Dropdown.Option>Crypto</Dropdown.Option>
                  <Dropdown.Option>Education</Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label>Short Description *</Label>
            <Textarea
              name="short_description"
              placeholder="Write a short description...."
              control={control}
            ></Textarea>
          </FormGroup>
          <FormGroup>
            <Label>Story *</Label>
            <ReactQuill
              placeholder="Write your story......"
              modules={modules}
              theme="snow"
              value={content}
              onChange={setContent}
            ></ReactQuill>
          </FormGroup>
          <FormRow>
            <FormGroup>
              <Label className="text-start">Goal *</Label>
              <Input
                control={control}
                name="goal"
                placeholder="$0.00 USD"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label className="text-start">Raised Amount *</Label>
              <Input
                control={control}
                name="amount"
                placeholder="$0.00 USD"
              ></Input>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label className="text-start">Amount Prefilled</Label>
              <Input
                control={control}
                name="prefilled"
                placeholder="Amount Prefilled"
              ></Input>
              <p className="text-sm text-left text-text3">
                It will help fill amount box by click, place each amount by
                comma, ex: 10,20,30,40
              </p>
            </FormGroup>
            <FormGroup>
              <Label className="text-start">Video</Label>
              <Input control={control} name="video" placeholder="Video"></Input>
              <p className="text-sm text-left text-text3">
                Place Youtube or Vimeo Video URL
              </p>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label className="text-start">Campaign End Method</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select one"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option>Architecture</Dropdown.Option>
                  <Dropdown.Option>Crypto</Dropdown.Option>
                  <Dropdown.Option>Education</Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
            <FormGroup>
              <Label className="text-start">Counrty</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select a country"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option>Việt Nam</Dropdown.Option>
                  <Dropdown.Option>Thái Lan</Dropdown.Option>
                  <Dropdown.Option>Hàn Quốc</Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label className="text-start">Start Date</Label>
              <Input
                control={control}
                name="start"
                placeholder="Start Date"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label className="text-start">End Date</Label>
              <Input
                control={control}
                name="end"
                placeholder="End Date"
              ></Input>
            </FormGroup>
          </FormRow>
          <div className="text-center">
            <Button kind="primary" className="mx-auto mt-10 px-10">
              Submit new campaign{" "}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignAddNew;
