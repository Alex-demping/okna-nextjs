export default function GoogleMap() {
    return (
        <div className="w-full h-[400px] overflow-hidden mb-[50px] lg:mb-[80px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2234.603147919304!2d36.433481437185385!3d49.93081578964523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sua!4v1784281837598!5m2!1sru!2sua"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
            />
        </div>
    );
}