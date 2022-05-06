


export const NotFound = (props: any) => {

    return (  
        <div className="page-wrap d-flex flex-row align-items-center">
            <div className="container" style={{height: '51.75vh', marginTop: '20vh'}}>
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <span className="display-1 d-block">404</span>
                        <div className="mb-4 lead">The page you are looking for was not found.</div>
                        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                            <a className="btn btn-primary btn-lg px-4 me-sm-3" href="/login">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

} 




export default NotFound;




