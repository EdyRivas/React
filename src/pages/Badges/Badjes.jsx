import React from "react"
import SkeletonItem from "../../compounents/skeletonitem"
import BadgesList from "../../compounents/BadgeList"
import api from "../../libs/api"
import "./Badges.css"
import Button from "../../compounents/Main_butt"
import Footer from "../../compounents/Footer"
class Badges extends React.Component {

    state={
        loading:true,
        error: null,
        data: undefined,
        handle_footer: {bottom:0},
    };

    componentDidMount(){
        this.fetchData();
        this.setFetchInterval();
    }
    fetchData = async() =>{
        this.setState({loading: true, error: null})
        try{
            const data = await api.badges.list();
            data.reverse()
            this.setState({loading: false, data: data})
        }catch(error){
            this.setState({loading: false, error: error, data: []})
        }
    }

    setFetchInterval(){
        this.interval = setInterval(this.fetchData, 3000)
    }
    componentWillUnmount(){
        clearInterval(this.setFetchInterval)
    }

    render(){
        if(this.state.loading===true && !this.state.data){
            return <SkeletonItem></SkeletonItem>
        }
        return(
            <React.Fragment>
                <div className="Badges__container">
                    <div className="Badges__button">
                        <Button theme={"Button-light"} contentText={"New Badge"} link={"/new"}>

                        </Button>
                    </div>
                </div>
                <BadgesList badges={this.state.data}></BadgesList>
                <Footer s={this.state.handle_footer}></Footer>
            </React.Fragment>
        )
    }
}
export default Badges;