export default function FormGroup({children, item}){
    return(
        <div className="form-group">
            <div className="header">
                <div>
                    <h4>{item?.title ?? 'Title'}</h4>
                    <p>{item?.desc ?? 'Desc'}</p>
                </div>
                <p>Step {item?.stepNow ?? '1'} dari {item?.stepTotal ?? '4'}</p>
            </div>
            {children}
        </div>
    )
}