import { useState } from 'react';
import { TextField } from '@/components/CustomComponents';
import { NextPage } from 'next';
import Head from 'next/head';
import { TextArea } from '@/components/CustomComponents/TextArea';
import Image from 'next/image';
import ContactUsImg from '@/public/assets/contact_us.svg';
import Button from '@/components/CustomComponents/Button';

const ContactUs: NextPage = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [msg, setMsg] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changeMsg = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMsg(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <section className="flex items-center md:h-[80vh]">
        <div className="grid md:grid-cols-2 w-full gap-2">
          <div className="contact-form-container order-2 md:order-1">
            <form onSubmit={handleSubmit}>
              <h1 className="text-3xl mt-1 md:mt-0 md:text-4xl md:mb-12 font-semibold text-center md:text-left">
                Drop us a line
              </h1>
              <TextField
                htmlFor="name"
                id="name"
                label="Name"
                name="name"
                type="text"
                style={{ marginTop: '1rem' }}
                value={name}
                handleChange={changeName}
                required={true}
              />
              <TextField
                htmlFor="email"
                id="email"
                label="Email"
                name="email"
                type="email"
                style={{ marginTop: '1rem' }}
                value={email}
                handleChange={changeEmail}
                required={true}
              />
              <TextArea
                htmlFor="msg"
                id="msg"
                label="Message"
                name="msg"
                style={{ marginTop: '1rem' }}
                value={msg}
                required={true}
                handleChange={changeMsg}
              />
              <Button
                type="submit"
                variant="contained"
                size="lg"
                className="w-full mt-3"
              >
                Submit
              </Button>
            </form>
          </div>
          <div className="image-container flex items-center justify-center order-1">
            <div>
              <Image
                src={ContactUsImg}
                alt="contact img"
                height={400}
                width={400}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
