import DiscordSvg from './DiscordSvg';
import LinktreeIcon from './LinktreeIcon';
import TelegramIcon from './TelegramIcon';
import TwitterIcon from './TwitterIcon';

function Footer() {
  return (
    <footer>
      <div className='container'>
        <img src='/images/aexcelite.png' alt='' />
        <p>
          AEXCELITE Digital Technologies LLC Identification <br /> Number:
          405552548 Registering Authority: LEPL National <br /> Agency of Public
          Registry <br />
          <br /> <a href='/terms-and-conditions'>Terms and Conditions</a> <br />
          <br /> <a href='/terms-of-use'>Terms of Use</a> <br />
          <br /> <a href='/privacy-notice'>Privacy Notice</a> <br />
          <br /> © Copyright 2023 - All Rights Reserved
        </p>
        <div className='social-links'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://discord.gg/aexcelite'
          >
            <DiscordSvg />
          </a>
          <a
            target='_blank'
            href='https://t.me/+XvDZAGwIU8BkNDM0'
            rel='noreferrer'
          >
            <TelegramIcon />
          </a>
          <a
            target='_blank'
            href='https://twitter.com/AEXCElite'
            rel='noreferrer'
          >
            <TwitterIcon />
          </a>
          <a
            href='https://linktr.ee/AEXCElite'
            target='_blank'
            rel='noreferrer'
          >
            <LinktreeIcon />
          </a>
        </div>
      </div>
      <img src='/images/footer_image.webp' alt='' className='img' />
    </footer>
  );
}

export default Footer;
