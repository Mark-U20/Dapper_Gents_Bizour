import './footer.css';
// this is broke && and i cannot figure out why

export default function Footer() {
  //use semantic ui grids and create 1 row with 4 columns for each of us
  return (
    <footer>
      <section>
        <h3>License information</h3>
        <h4>
          This page has a copyleft license, GPL-3.0.{' '}
          <span className="copyLeft">&copy;</span>
        </h4>
      </section>
      <section>
        <h3>Checkout the Dapper Gents' other work!</h3>
        <h4>Justyn Helgeson</h4>
        <a href="https://github.com/jystyn">Github</a>
        <h4>Logan Stutton</h4>
        <a href="https://github.com/LSton40">Github</a>
        <h4>Mark Ustby</h4>
        <a href="https://github.com/Mark-U20">Github</a>
        <h4>Gunnar Johnson</h4>
        <a href="https://github.com/fixedOtter">Github</a>
      </section>
    </footer>
  );
}
