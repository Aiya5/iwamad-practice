type FooterProps = {
  year: number;
  name: string;
};

function Footer({ year, name }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>
        © {year} {name}
      </p>
    </footer>
  );
}

export default Footer;