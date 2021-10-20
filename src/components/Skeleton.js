const Skeleton = ({ children }) => {

    children && console.log(children);

    return ( <>
        { children }
    </> );
}
 
export default Skeleton;