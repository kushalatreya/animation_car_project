import styled from "styled-components";

/* ============================
ButtonContainer
=============================== */

export const ButtonWrapper = styled.button`
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  text-transform: capitalize;
  color: var(--lightBlue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
export const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
  }
`;
/* ===================================

======================================*/
export const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  
  /* .card-sale{
    position: absolute;
    left: 1px;
    top: 1px;
    background: var(--mainBlue);
    border-radius: 50%;
    text-align: center;
    color: #fff;
    font-size: 14px;
    width: 50px;
    height: 50px;
    padding: 15px 0 0 0;
    z-index: 1;
  } */
  
  
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  
`;

export const LocationWrapper = styled(ProductWrapper)`
  
        position: absolute;
        left: 1px;
        bottom: 1px;
        background: ${props =>
  props.sale ? 'var(--warning)' : 'var(--mainWhite)'};
        text-align: center;
        border-radius: 30px 30px 30px 30px;
        color: #000;
        padding: 5px 10px;
        font-size: 14px;
        z-index:1;

    
`;
/* ===================================

======================================*/
export const HeadWrapper = styled.div`
  /* background-image: url("https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  background-repeat:no-repeat;
  color: var(--mainWhite) !important;
  font-size: 1.3rem;
  text-transform: capitalize !important;
  height:50vh;
  width:100vw;
  position: relative;

  .jumbotron h1{
    margin: -2vh;
    position:absolute;
    left:0;
    bottom: 0;

  } */
  /*search box css start here*/
.search-sec{
    padding: 2rem;
}
.search-slt{
    display: block;
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #55595c;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    height: calc(3rem + 2px) !important;
    border-radius:0;
}
.wrn-btn{
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    height: calc(3rem + 2px) !important;
    border-radius:0;
}
@media (min-width: 992px){
    .search-sec{
        position: relative;
        background: var(--mainBlue);

      }
    }
    
    @media (max-width: 992px){
      .search-sec{
        background: var(--mainBlue);
             

    }
}`;
/* ===================================

======================================*/
export const SpanWrapper = styled.span`

  .card-notify-year {
    position: absolute;
    right: 1px;
    top: 1px;
    background: ${props =>
    props.sale ? 'var(--danger)' : 'var(--mainBlue)'};
    border-radius: 50%;
    text-align: center;
    color: #fff;
    font-size: 14px;
    width: 50px;
    height: 50px;
    padding: 15px 0 0 0;
    z-index: 1;
  }
`;

export const SearchBarWrapper = styled.div`
 .searchbar{
    margin-bottom: auto;
    margin-top: auto;
    height: 60px;
    background-color: #353b48;
    border-radius: 30px;
    padding: 10px;
    }

    .search_input{
    color: white;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color:transparent;
    line-height: 40px;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_input{
    padding: 0 10px;
    width: 450px;
    caret-color:red;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_icon{
    background: white;
    color: #e74c3c;
    }

    .search_icon{
    height: 40px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color:white;
    }

`;