<template>
  <section class="add">
    <div class="add__cont">
      <div class="add__top">
        <div class="first">
          <a class="add__logo" href="index.html">
            <img src="@/assets/img/logo.png" alt="logo" />
            <p>BRSN<span>D</span></p>
          </a>
          <p>
            Objectively transition extensive data rather than cross functional
            solutions. Monotonectally syndicate multidisciplinary materials
            before go forward benefits. Intrinsicly syndicate an expanded array
            of processes and cross-unit partnerships.
          </p>
          <p>
            Efficiently plagiarize 24/365 action items and focused
            infomediaries. Distinctively seize superior initiatives for wireless
            technologies. Dynamically optimize.
          </p>
        </div>
        <div class="second">
          <h4>Company</h4>
          <a href="#"> Home </a>
          <a href="#"> Shop </a>
          <a href="#"> About </a>
          <a href="#"> How It Works </a>
          <a href="#"> Contact </a>
        </div>
        <div class="third">
          <h4>INFORMATION</h4>
          <a href="#"> Tearms & Condition </a>
          <a href="#"> Privacy Policy </a>
          <a href="#"> How to Buy </a>
          <a href="#"> How to Sell </a>
          <a href="#">Promotion</a>
        </div>
        <div class="fourth">
          <h4>SHOP CATEGORY</h4>
          <a href="#"> Men </a>
          <a href="#"> Women </a>
          <a href="#"> Child </a>
          <a href="#"> Apparel </a>
          <a href="#">Brows All</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.add {
  padding: 110px 0 90px 0;
  display: flex;
  width: 100%;
  border-bottom: 2px solid #ececec;

  &__cont {
    justify-content: space-between;
    max-width: 1170px;
    width: 100%;
    min-height: 100px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin: 0 auto;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  &__top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    & > .first {
      display: flex;
      flex-direction: column;
      & > a {
        margin-bottom: 41px;
        display: flex;
        align-items: center;
        text-decoration: none;
        &:hover p,
        &:hover img {
          cursor: pointer;
          transform: scale(1.1);
          transition: transform 0.5s;
        }
        &:active p,
        &:active img {
          transform: scale(1);
          transition: transform 0.5s;
        }
        & > p {
          font-size: 27px;
          font-weight: 300;
          margin-left: 15px;
          color: $base;

          & > span {
            color: $pinc;
            font-weight: 600;
          }
        }
      }
      & > p:first-of-type {
        width: 100%;
        max-width: 427px;
        color: #898989;
        font-size: 14px;
        font-weight: 300;
        line-height: 24px;
        letter-spacing: 0.35px;
        margin-bottom: 36px;
      }
      & > p:last-of-type {
        width: 100%;
        max-width: 427px;
        color: #898989;
        font-size: 14px;
        font-weight: 300;
        line-height: 24px;
        letter-spacing: 0.35px;
        margin-bottom: 36px;
      }
    }
    & > .second,
    & > .third,
    & > .fourth {
      display: flex;
      flex-direction: column;
      & > h4 {
        display: flex;
        color: #f16d7f;
        font-size: 18px;
        font-weight: 700;
        line-height: 26px;
        text-transform: uppercase;
        letter-spacing: 0.45px;
        margin-bottom: 45px;
      }
      & > a {
        text-decoration: none;
        color: #898989;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.4px;
        line-height: 42px;
        margin-bottom: 5px;
        &:hover {
          cursor: pointer;
          color: $pinc;
        }
        &:active {
          cursor: pointer;
          color: $pincActive;
        }
      }
    }
  }
}

@include mq(900, max) {
  .add {
    padding: 50px 0 20px 0;
    display: flex;
    width: 100%;
    border-bottom: 2px solid #ececec;

    &__cont {
      justify-content: space-between;
      max-width: 1170px;
      width: 100%;
      min-height: 100px;
      display: flex;
      align-items: center;
      padding: 0 15px;
      margin: 0 auto;
      flex-wrap: wrap;
    }
    &__top {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      flex-wrap: wrap;
      & > .first {
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 100%;
        & > a {
          margin-bottom: 41px;
          display: flex;
          align-items: center;
          text-decoration: none;
          &:hover p,
          &:hover img {
            cursor: pointer;
            transform: scale(1.1);
            transition: transform 0.5s;
          }
          &:active p,
          &:active img {
            transform: scale(1);
            transition: transform 0.5s;
          }
          & > p {
            font-size: 27px;
            font-weight: 300;
            margin-left: 15px;
            color: $base;

            & > span {
              color: $pinc;
              font-weight: 600;
            }
          }
        }
        & > p:first-of-type {
          width: 100%;
          max-width: 80%;
          color: #898989;
          font-size: 14px;
          font-weight: 300;
          line-height: 24px;
          letter-spacing: 0.35px;
          margin-bottom: 36px;
        }
        & > p:last-of-type {
          width: 100%;
          max-width: 80%;
          color: #898989;
          font-size: 14px;
          font-weight: 300;
          line-height: 24px;
          letter-spacing: 0.35px;
          margin-bottom: 36px;
        }
      }
      & > .second,
      & > .third,
      & > .fourth {
        display: flex;
        flex-direction: column;
        & > h4 {
          display: flex;
          color: #f16d7f;

          font-size: 18px;
          font-weight: 700;
          line-height: 26px;
          text-transform: uppercase;
          letter-spacing: 0.45px;
          margin-bottom: 45px;
        }
        & > a {
          text-decoration: none;
          color: #898989;

          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0.4px;
          line-height: 42px;
          margin-bottom: 5px;
          &:hover {
            cursor: pointer;
            color: $pinc;
          }
          &:active {
            cursor: pointer;
            color: $pincActive;
          }
        }
      }
    }
  }
}

@include mq(500, max) {
  .add {
    padding: 30px 0 20px 0;
    display: flex;
    width: 100%;
    border-bottom: 2px solid #ececec;

    &__cont {
      justify-content: space-between;
      max-width: 1170px;
      width: 100%;
      min-height: 100px;
      display: flex;
      align-items: center;
      padding: 0 15px;
      margin: 0 auto;
      flex-wrap: wrap;
    }
    &__top {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      flex-wrap: wrap;
      & > .first {
        display: flex;
        flex-direction: column;
        //@warn  box-sizing: content-box;
        & > a {
          margin-bottom: 41px;
          display: flex;
          align-items: center;
          text-decoration: none;
          justify-content: center;
          &:hover p,
          &:hover img {
            cursor: pointer;
            transform: scale(1.1);
            transition: transform 0.5s;
          }
          &:active p,
          &:active img {
            transform: scale(1);
            transition: transform 0.5s;
          }
          & > p {
            font-size: 27px;
            font-weight: 300;
            margin-left: 15px;
            color: $base;

            & > span {
              color: $pinc;
              font-weight: 600;
            }
          }
        }
        & > p:first-of-type {
          width: 100%;
          max-width: 427px;
          color: #898989;
          font-size: 14px;
          font-weight: 300;
          line-height: 24px;
          letter-spacing: 0.35px;
          margin-bottom: 36px;
        }
        & > p:last-of-type {
          width: 100%;
          max-width: 427px;
          color: #898989;
          font-size: 14px;
          font-weight: 300;
          line-height: 24px;
          letter-spacing: 0.35px;
          margin-bottom: 36px;
        }
      }
      & > .second,
      & > .third,
      & > .fourth {
        display: flex;
        flex-direction: column;
        & > h4 {
          display: flex;
          color: #f16d7f;

          font-size: 15px;
          font-weight: 700;
          line-height: 26px;
          text-transform: uppercase;
          letter-spacing: 0.45px;
          margin-bottom: 5px;
          justify-content: center;
        }
        & > a {
          text-decoration: none;
          color: #898989;

          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0.4px;
          line-height: 20px;
          text-align: center;
          margin-bottom: 5px;
          &:hover {
            cursor: pointer;
            color: $pinc;
          }
          &:active {
            cursor: pointer;
            color: $pincActive;
          }
        }
      }
    }
  }
}
</style>