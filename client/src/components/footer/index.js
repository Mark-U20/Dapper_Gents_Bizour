import './footer.css';
// this is broke && and i cannot figure out why

export default function Footer() {
  //use semantic ui grids and create 1 row with 4 columns for each of us
  return (
    <footer class="footer">
      <section class="foot-heading">
        {/* <h3>License information</h3> */}
        <h4>
          This page has a copyleft license, GPL-3.0.{' '}
          <span className="copyLeft">&copy;</span>
        </h4>
      </section>
      <section class="creators">
        <h3>Checkout the Dapper Gents' other work!</h3>
        <div class="dappers">
            <a href="https://github.com/jystyn">Justyn Helgeson</a>
            <a href="https://github.com/fixedOtter">Gunnar Johnson</a>
            <a href="https://github.com/LSton40">Logan Sutton</a>
            <a href="https://github.com/Mark-U20">Mark Ustby</a>
        </div>
      </section>
    </footer>
  );
}
