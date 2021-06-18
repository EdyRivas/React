import React from "react"
import Skeleton from "react-loading-skeleton"
import "./Style/skeletonitem.css"

const SkeletonItem = () =>{
    return(
        <React.Fragment>
            <div className="container List mb-3">
                <div className="List-unstyled">
                    <div className="BadgesListItem mt-5">
                        <div className="col-5">
                            <div className="d-flex justify-content-center mt-2">
                                <Skeleton circle={true} height={150} width={150}></Skeleton>
                            </div>
                        </div>
                        <div className="col-7">
                            <div style={{padding: "2em"}}>
                                <Skeleton count={5}></Skeleton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container List mb-3">
                <div className="List-unstyled">
                    <div className="BadgesListItem mt-2">
                        <div className="col-5">
                            <div className="d-flex justify-content-center mt-2">
                                <Skeleton circle={true} height={150} width={150}></Skeleton>
                            </div>
                        </div>
                        <div className="col-7">
                            <div style={{padding: "2em"}}>
                                <Skeleton count={5}></Skeleton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container List mb-3">
                <div className="List-unstyled">
                    <div className="BadgesListItem mt-2">
                        <div className="col-5">
                            <div className="d-flex justify-content-center mt-2">
                                <Skeleton circle={true} height={150} width={150}></Skeleton>
                            </div>
                        </div>
                        <div className="col-7">
                            <div style={{padding: "2em"}}>
                                <Skeleton count={5}></Skeleton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default SkeletonItem