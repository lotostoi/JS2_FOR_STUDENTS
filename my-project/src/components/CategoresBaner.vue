<template>
  <section class="category">
    <div class="category__cont">
      <div class="left">
        <a href="#" class="prod">
          <img
            src="@/assets/img/prod1.jpg"
            alt="prod"
            class="big"
            width="560"
            height="542"
          />
          <div class="dabge">
            <span>Hot deal</span>
            <span>For men</span>
          </div>
        </a>
        <a href="#" class="prod">
          <img
            src="@/assets/img/prod3.jpg"
            class="littel"
            alt="prod"
            width="560"
            height="261"
          />
          <div class="dabge">
            <span>LUXIROUS & trendy </span>
            <span>ACCESORIES</span>
          </div>
        </a>
      </div>
      <div class="right">
        <a href="#" class="prod">
          <img
            src="@/assets/img/prod2.jpg"
            alt="prod"
            class="littel"
            width="560"
            height="261"
          />
          <div class="dabge">
            <span>30% offer</span>
            <span>Women</span>
          </div>
        </a>
        <a href="#" class="prod">
          <img
            src="@/assets/img/prod4.jpg"
            class="big"
            alt="prod"
            width="560"
            height="542"
          />
          <div class="dabge">
            <span>New arrivals</span>
            <span>For men</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.category {
  margin-top: 96px;
  display: flex;
  width: 100%;
  &__cont {
    max-width: 1170px;
    width: 100%;
    min-height: 50px;
    display: flex;
    align-items: center;
    padding: 0 0px;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;

    & > .left,
    & > .right {
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      & > a {
        position: relative;
        text-decoration: none;
        margin-bottom: 20px;
        &:before {
          content: "";
          display: flex;
          position: absolute;
          width: 100%;
          height: calc(100% - 3px);
          transition: background-color 0.5s;
          box-sizing: content-box;
        }
        &:hover:before {
          content: "";
          display: flex;
          position: absolute;
          background-color: rgba(128, 128, 128, 0.692);
        }
        &:hover div {
          background-color: rgba(187, 231, 129, 0.555);
        }
        & > img.littel {
          width: 560px;
          height: 261px;
        }
        & > img.big {
          width: 560px;
          height: 542px;
        }
        & > div {
          display: flex;
          flex-direction: column;
          padding: 16px 20px;
          background-color: white;
          position: absolute;
          transition: background-color 0.5s;
          top: 26px;
          & > span:first-of-type {
            display: flex;
            color: #222222;
            font-size: 18px;
            font-weight: 600;
            text-transform: uppercase;
          }
          & > span:last-of-type {
            display: flex;
            color: $pinc;
            font-weight: 600;
            font-size: 30px;
            letter-spacing: 0.75px;
          }
        }
      }
    }
    & > .right {
      margin-right: 0;
    }
  }
}

@include mq(1200, max) {
  .category {
    &__cont {
      //  justify-content: space-around;

      & > .left,
      & > .right {
        //  margin-right: 0;
        & > a {
          &:before {
            content: "";
            display: none;
            position: absolute;
            width: 100%;
            height: calc(100% - 3px);
            transition: background-color 0.5s;
            box-sizing: content-box;
          }

          & > img.littel {
            width: calc(300px * 1.5);
            height: calc(138px * 1.5);
          }
          & > img.big {
            width: calc(300px * 1.5);
            height: calc(284px * 1.5);
          }
        }
      }
    }
  }
}
@include mq(920, max) {
  .category {
    &__cont {
      & > .left,
      & > .right {
        margin-right: 0;
        & > a {
          &:before {
            content: "";
            display: none;
            position: absolute;
            width: 100%;
            height: calc(100% - 3px);
            transition: background-color 0.5s;
            box-sizing: content-box;
          }
          &:hover:before {
            content: "";
            display: none;
            position: absolute;
            background-color: rgba(128, 128, 128, 0.692);
          }
          &:hover div {
            background-color: white;
          }
          & > img.littel {
            width: calc(300px * 1.7);
            height: calc(138px * 1.7);
          }
          & > img.big {
            width: calc(300px * 1.7);
            height: calc(284px * 1.7);
          }
        }
      }
    }
  }
}

@include mq(540, max) {
  .category {
    &__cont {
      & > .left,
      & > .right {
        & > a {
          &:before {
            content: "";
            display: none;
            position: absolute;
            width: 100%;
            height: calc(100% - 3px);
            transition: background-color 0.5s;
            box-sizing: content-box;
          }

          & > img.littel {
            width: 300px;
            height: 138px;
          }
          & > img.big {
            width: 300px;
            height: 284px;
          }
          & > div {
            display: flex;
            flex-direction: column;
            padding: 10px;
            background-color: white;
            position: absolute;
            transition: background-color 0.5s;
            top: 26px;
            & > span:first-of-type {
              display: flex;
              color: #222222;
              font-size: 14px;
              font-weight: 600;
              text-transform: uppercase;
            }
            & > span:last-of-type {
              display: flex;
              color: $pinc;
              font-weight: 600;
              font-size: 20px;
              letter-spacing: 0.75px;
            }
          }
        }
      }
    }
  }
}
</style>