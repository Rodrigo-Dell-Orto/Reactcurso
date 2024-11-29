

function CardWidget({amount}) {
    return (
        <a className="nav-link">
            <button type="button" className="btn btn-primary position-relative">
                Inbox
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{amount}<span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </a>
    )

}

export default CardWidget   