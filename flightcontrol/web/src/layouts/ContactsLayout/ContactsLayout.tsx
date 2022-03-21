import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type ContactLayoutProps = {
  children: React.ReactNode
}

const ContactsLayout = ({ children }: ContactLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.contacts()} className="rw-link">
            Contacts
          </Link>
        </h1>
        <Link to={routes.newContact()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Contact
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ContactsLayout
