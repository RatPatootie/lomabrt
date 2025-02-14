export default function Map() {
    return (
        <div className="map bg-blue-100 text-white p-4">
            <h2>Карта</h2>
            <iframe className="w-full " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.658112013855!2d25.0376452!3d48.5275516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4736d32033ef0523%3A0xbb30679950b0ff76!2z0JrRgNCw0L3QsNGC0Ywg0JrRgNCw0L3QsNGC0YDQvtC90L7QstCwLCAxMDAwMA!5e0!3m2!1suk!2sua!4v1631475900625!5m2!1suk!2sua" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
        </div>
    );
};