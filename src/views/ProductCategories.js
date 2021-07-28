import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://www.handong.edu/site/handong/res/img/sub_859-01.png'
        /*'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80'*/,
      title: '경영경제',
      width: '50%',
    },
    {
      url:
      'https://www.handong.edu/site/handong/res/img/sub_856-01.png'
      /*'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80'*/,
      title: '국제어문',
      width: '30%',
    },
    {
      url:
      'https://www.joongbu.ac.kr/grad/img/contents/box7_37.jpg'
       /*'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80'*/,
      title: '상담심리',
      width: '20%',
    },
    {
      url:
      'https://www.handong.edu/site/handong/res/img/sub_877-01.png'
      /*'https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400&q=80'*/,
      title: '생명과학',
      width: '38%',
    },
    {
      url:
        'https://www.handong.edu/site/handong/res/img/sub_871-01.png'
        /*'https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400&q=80'*/,
      title: '기계제어',
      width: '38%',
    },
    {
      url:
      'data:image/png;base64,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'
      /* 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=400&q=80'*/,
      title: '공간시스템',
      width: '24%',
    },
    {
      url:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA4VBMVEX///8AAAAJAwP8/Pz//f75+fn9//4GBQP8+vsEAAD9/fsJAwWQioz29vb9///My8u3s7URAADv7+8YAADU1NTp6enDwcLd3d2OjYoOCgs5OTl9fX3Hx8c+Pj6dnZ1ycnJxbG5PT0+Xl5ewsLBZVlccHByGhIWlpaU0NDRkZGTa2tpISEhXUlR1dXUmJiYdGRotLSwVFRUeEQ9gXV8wMjAwKiwcFhgmISMVDQXo5N4hGhYhDQ4VCQArJiAjFhkdARBuZWojCQ7g1dlMQ0RbUVQ5KStVT0iuoqEpGhW7srZOREHI/i2xAAAW5klEQVR4nO1dCXviONJWIRmMiTFxfGDuK5whF5tJT6d3Znanv9nj//+gr0qyzQ1JsMnCQ810njgYW68l1V1lxi50oQtd6EIXutCFLnShC13oTInz6MfZEqLjTPvqUaRH4RSe7xwKxrxu7XxXqWky9xUA6hqu07MEqQsEGGQCmODBWUIU+h0UCoUgB9UzXaiiAZlCvpDLAeBe/OrRJE6cCxvyGaQcQpyYZycwSAr2cRMqhDnwjK8eUQpkQmaOcHJ2CJGzDCCTiRDmwPnqESVOnA2XEDa/ekDJk6P4TIQQzo3VcFYNp1BBDMD76iElTMJ8iRFKghE7L5koLCgsI7y1zwshCsNCjoAhhRC9s0LI9QmgQhrAba/3pAQ/TM8IIWfCR50bOWjZZcydyVmEyhmZFyjuGxAUctBghmHoek9B9L96XMmRxsUMEeK61Aihab8ixBwMvnpcyRHXdeQzcG9Kq1BnvAQBAm6RV+MsqFjkFiHshqwFDakeQoQH/YsHlhxx1oEC3DMuNTXOdVbDRRuA+9UDS4w4+xMRdkM3Iv4QrJ5HhF1pNp4DFdE0hNsFVVugKVUoQPVsFLcsbkPoLPxB6Cbgn16YcSYIURrmwc/Oj4XOSOyDeTY+txlAe2lB6igwcJla54JQHwKK90UsGtcI4dnIfFRKUUVbRIhTN0Lu0zwXVuMBVJbXo3RMFWB4LnG2PkB5bcf5EMCT+TUDSpyQ0azzFHJrnItP0XwEEHzNGmzBmbijNOYCzFCNWUXYXVEDTpY4MZpNYmGMCEesePQBJU04c1cA4/UPsvZ9HiZngBAhNgE22LpF1oP8rf0FI0qYkMPcy224Slmc28KmyT014gzNiM7GOfQQYe0LhpQwceagNBTrCI2ijxZH4wuGlDCRegb2BpdTkbMHICP49KkK9S020gQoPnP6VN/iv6fAPgzPwd+2Wd4Twi5uxDMQFzbK+02rFP9mIcIz8ChakHO3rFJywVlHH1Di1IX6RkueXKUA0D3+iJKm/rZ4NpfM9OStC8HaO6R6Fc4hie9+x1ZrAFoXpw7QLuxglyWA4OQROvC6/UNyM578KvXgbvuHNiI8+aSTBlxt/1BH3ds5dYRNKG2PZesoLk46rYZ2WHunT7R6+iJfG8KuOSrDidvAnLmQ24VwIEX+8QaUOHGUBztt3NpqYPHUiCOEnYqnD/B4yghltld3FwIXrYtTRigzg3dmr9n3AKcMEGkE2i6tzKzDiVv5ZuVR27EKOettjGmcENnQ3L3NRnDifgx7Q3h7iapw0lFS8uh3dyPsnLra1l3JMlkhcpmeuKems5tTkkYA02MNJhWqDnexUhWYGp10qnB7tvNj0luhd9II90bPXKp7PmGEfC+jRLWtnh7CqLeB+plGhpm9P+lpCPd6iggJHMFcT1hKhqw9Sifeuw4Ppxxg697uPWUChcRVb85l3oBb63aas14baTaa9hslz/KjlZrNsiLjMpnnoMltTPYMRWb1Ja16c4YA/T41qNhAf5uVBzV3fu5hjUime1gpl+lECSco0t4zp3EV4ALlMvkY6GOrU/Ltg1lQZR8rlbH8FBC2VD1nsIoQqZApBJmgoHDWmx3LV0muGxJi3kF7LSOqplk7SRwoPjhHPaJQWEGXy6kJJIyZQiEo4BnqL8Nex3PlfWnFykX77nW7z37npJuH5pPrWJ6HzMClJijikL1BumBhCWGQUVMWPD7eZhb2JOLMBArm62hghe2B+PuDRTbsOUGTqZkl2yu353zh8cpEhJ9ncTi88QpCgPbAmmdcG67jIZut36ob5vHkvMRZ73s2+0gfK6ey52ROIcRA3QdXDpF8pCVmHsTEUVOaIyxkoEnuMIMbSNmsYbCouAWRXs3qck8W8pmCRFmpllyZ5POereLt82f7jR6xhEKOuhEUQgrwToPDpFTUZEQCDKAfVs1tJt11BtNJNJkZxYBKvtyVO91o+Fl340CpjhSJ+Z02XTUcRwQvXFWbE1TeTTbEEPP5B1vs0NkUBm47g6bcKdHOrFfVit1xF87K1sY0E0TH7AHBo+4K4TjCTRhtnEMncRAjpFRrfcduUaxTfW57nbqaTDWgSmenJONstlHjRIC1keRsBDAf1ugPe63mtEdPMUc1wvXDEJKbMogQztaz6FfPVv/kztOthmR7+fCpt7quCKUlX+F/eJe1Qhk6dBv39H3ZHIOuBBXPiR+F6SF4+uAQfHQrswJBoBC+frhEznQao1u1MQnmpOyY4WVXEFZXESJEqymnKYQ36XvLGZg4wdYjrt4DEeK+8+/VLBYK4HxQvMqzbefqTu1L4rUvrfVdybndWEHItG47bhqByAa+QamLParSjxEahvlICA9apZqJis0DhAg/GqKUU1FE1cr0+hmFkn62G+7KaePSMkK7c0ubL5DwJl1b4kGEE4MtIUSV5NA5JNL9V6Deafi4fO3zTZv8Qe9Jcg368dIZZ9HyymblQ2BWFHZSwqFKDCWQOm9l4WkgX17OosWvzhKIuQlduC+4FwlhnX0SoWKyWq1fVzoeqVx9R1PKHU5FyD9IPDhNkN3o8JzbKrHgeHYDGJqrl21A+7PA5qQjxLZi2FD+7EU0pqQ+9xszmsiApnJYlSqgYE6kSBgOfZpDWYqbruuyUIFX9AAvawidzw9pTqi/C7MFqmmT9zlbPpIjRMIuNeWmlJynShaRT/dAQWL1lGzHD6qoDCmtOr7fC6wWzmioOXuJ5IJxnawzeetkSo712jQjpQgKkcLV2JZy0qlH+O4bmzSAITwt/5mTByuZXDCeRePlCXJ5vLtzuDNRaalW/zHalK9Xvmm1pe4imSfbuFL+XIsCczZoJ+T7I33UnahZTMCVgPJOKxaZ5kjOI/fki+QvJPsstF60TY/xbkOcezRILmORM7NKTEDml/Hs/i/sIVVsZzrle3xwOJHKYJiOBdO3GLXrCLlWSdCFSo8KFSdaVCWWTeq5kfzzEKJyh0CvRpxtS+3IbH0Ox0lW0ki2jWIDDbMkOHRIBrOrNIf5WK/r+9uKYzYgrCYZ2teUR78hda9RUrELs5NXu/upOiooWwEmA1p6Ys1pN1pDqO3xI3+OkKejuV8fS8v985fhxE1495EEBM0ctfYaTPDxycMmqgJC180lLtICSiri8QU465YOQbKFNHzs1E9F8psD2Bh9tTYJ8VXJFWEig/HL0t4lfefKjcRKRCsIyaxMI/Obbmq9EMQq2xmX3kt+L1Qimq6hyYelMZ0JbxbpO7OV9rNTKanmc0hTmEarBS64oKLrPAxd0qs+cwn85/bxEnncdqMxU/q88oLgL3ZjSMopMp+ALAsUTWqqqktOb3woKbYDQY33Dqfxl5JgG2Xzzu9K6v4C0n64W3dBIRzNagbhAm7W9BD4KkLW9VJrB0JLSh9I58vHtUKpsE1IsOIq8NYjVtJVztVEBrRaJ4NwKVZhsdxZM1OsmyWAOrNpw9xTafKHgjGC2U2QfeZgoCuWunLx0A+l1Xqg5MdTVUqJlbyvhpPumwUIlXePQ7hCrv7uAlauycnPk4S/Mvf6w93+A51MXMcRxGm88J0JyOPcfvoJtRrTrsjlOyY/6ru+QRKiQhsQ1/c7fNW6YGZ3Ij02uFi96XwOEWfHTr9IiAQHsXwYiPcyNbepNNs7h+2MECjCxSGU+JBmBz6YUvzei/HgGK8UkHF+DxdSz90baKL2eWzwRKEbeC0JwYv7xye42uJjct3kg0yOOJuUKRors+N14dNID+kKXWjbtyNpeGJcIaUMNbQPagr47NxqZP5PkXtrJqsds6UpLlXUiWc222b1yHOY2VfW5cj/6NOXHNNu3IYYibFq3jGz2jWKz9bhqbRNaNAuFaV7acsPS+xDwWEiJSCZST4GyXSqvm0evf+APgik+N8kv1GY0CzTAu2YB6QW9CAHoT+ATJHjdsNEEKZUqlb5G+0/QY46CkH1fPF+0blOyLYHDYpmhNL0qCWlUur7M2iu6vr0oP9J+lcebkt02gGaZJsyvelBKuExOGqPOiF0tDiYVXla0I1lqJDZfSnJoG+SfDtkDiVCjfktuiDt6a/I3efd2yq9wEguVpwxodeGQBk4kwR8kH8CqF60UnEntkp8eWeKQOKEwMxO3UFtmlYQbc6p0p0bB01eSENZj0CaudalyyLEfFk78tuSpN0z7XCpkQnyk1M0DVUe3TzcGn9VFRcaXd1shirAfY0dU3CET3PckczcblGUGoIuRehCYbkS3V4K2Sz+wlfPRfplXlNCKvxjpAHYn8ylO4BMZrmce7eQkV4Yis8JSkDjq+pa1PJZJarMBZy0EePVFykIGfJFx2SQkhQEQQaGzkFC6DNEa5TMXBSBDx7Nn0SoBrvUOW8J8UqqwtIn8gDySwjJWY56IHHVQXoJ4JtJkzuQOMzIFnjAXD+i8YJPl8A6FpHMXmBjK6Ixjd+ODy1bbmtEuCAfKGHKnVA/c7RWWsfkNshIKaBKZuCrx4pcF4Nv8yzGuG8CLizDaMgsGfzfyorS9fykKTN+/Quu43xBl2SrKRGu5KnIkABu9oorjtbDlfTwX6SfCc34LJqQV/D927fnt7dnorg6i7TVPnx/fr7G/8FhA/jt+cePa0lQZb/+/fm3328UXWdkCqALhRWE5ONpgEwHg9et4Y7kCfWqPG6OAJU0zeTMybxdv/QiakfdvBC6Bd8zk1ar2WrOfBeeryvNVkgN1vzx/PZHdNhyaZ/5IH1tSwjJLSzTfQrwcJQaWvI6OEPIox2IMhDtRTTkqzf/+MM25hSPTkyvr6vRYfn6ebawzNzn5xtLLF2X0nnJX7qcWcQNnEWV7fOUtp5KogC1tA6lwkj1igAiwp//uPknY2sRVdygfz5DDGr0A5w5fERz8wdT6QuCWDEhpIb067offqmMTJs8q3fcTJnh4OX9ifTiTlwpxIrFohA/f/8dt1w2Gm00McWs/n9vz4YR/vGv57fFaK4HN/9aOJRz6Mle32s3RZ7ak2nDhydi7iMuk83JjLjSpGMGAeJM/fz9TZcupWWE2eIywh/P1atyRDUL3mbx0VXHFiFCd03T0QzNGKuc3dxtiuyU1qdAIU+hiJdIaAmRzWb1n2/X5BMUYnkfZovG8Pl7fIHe82/INEOCjpX/9018nH+1ucFZCbY0khJsJIsmcrFSlwLpmhDWrQRILqn41tmiuLu+1rn0kS8CxFVq/O3bL/EF2igz5mUqHQv+/QZxNcBvtlGkBK+tCD2ZW5hLsYyWXIkdlTYyYMJcQfjNyBaL9BIZSXOEw28P8RX++vY8KHW7JUVODX40S9FR6T8mzxbpXV5bEIpxiDC9DqCCUhhy+F99jGi1RYT63fO1bWSzxYjCxYob9fu3eXOvv75lFkfvwI/yAv/VkWtR/c4WhLoTIkwpGkWWH9oRedRDm/ZSRE9QVkrrOrPQHKgY5cAK9q/8t178937mujyvbmC/wve/2/GRoCApu0N+sjF7Rr6pBQE+pdV0AdW0MqX0y+6jSwY3IszqHvz7ez9ecCXL+FUdXD1/h24cQ67B9+v5WTUDeet/B9Ei/Y9dLGqsDltKLIVeB7VIjZTeWWrXZTblvbNaYUoIhf7z5vlHyDLy1DXAU79fP9/8Nzb8DTa6/u0mn4k1b+v67e0m4jQZF8WOGAI8bhYH9CIzBFgxP5v+uoOocKamsidGkocuI0S+ojPzJ+Sv54IAdZOwAqfnzvVoaY7EJ+F+Kj1kosMMuDzL7Ns8VFYUM3LGEieVBSw9ngJAqg8K1bTOdqeXbl3F1PfYuE+/lDvWYu4oGlNOJz6rRG8R6JajwzLVN1JfwclKFjSqabQJae5vu2noMxRMaKIhkdmZXbPsZjPmPhVtwRRaTmYTK8FFOo1eH7DadhBP8keU+fLQSKvloHsvHZe3/qrjYXF4GjdCUYgiIktOVKmoLQXwVbRGY9F5qlQqOiIoZFqs9V2gqBtAyxOM7w+4fowUnBKuUBQSvZ36YDG7RGxJPV2pw4zOWToiJYHLl1yMWPQsKL/I7VaoEDDFdvSctmAuv0/OhgiXVZr4GjI7jkcKjypRiD6MvkXnoUSSbwxS9VWuXyq3JtOus69o7PNEW3AEOao17DBj5wIRy7S8mDWKPzIeKTzL9seSOdKEAJ+laZqu71iW40TqTeLLM7ysTIqWsYMuM7K7M4bF+nDnOV7uwFuYw8UvRL+HRzNcpVeLAcq4z0MKhEzAcAKQNVefbQKgcvVqzc4705i1OuSP9+YuXBclFf152tn6aOc1cPo69bL93sQ4O4dzmEY66ToJqkLsqNjPo/vpXaDVRhWqqlApTvsfk4t693HamUlp1lczWPmwA4+HYtMv31dK8x3F7b1B+Rplfx3ltVa6yfSWLPSCR/vjujzNFi/VYWYtYOLM3hvnbFCq0VGSaHRh35EpQa+0NT6KUGZeNgHKpGMtLm9zr9JVhVz+KXWnL/Ft3f5TViPCvcs+PoV+5x7qXW2Zy9Ns7svj420Uh49a2iEmYZrCRWOQukc8vV9MkEeXHJ4uVb42N+8lc8/06AFuw/pHBvspEqaO1q7sdIKb/r1MFG04tBtkiuHtwN6c6cP5Hibi0jZMoJhyD+EeHMqwa4a89u8WEzoT1lTVbFG4aONy5P7uSZQvI21+cLwfJByasOuqvpock/tFWHiGPu6j7lOR07dVKGi8tiOnWb7qOZN230QTLeq2asgDr/tjdcpoYJpTrgM8TffIairi2M5s8NM2rdIUXdpEGr3yNCjIzhTWexDiD6eDFpws6N2TS4Cywyxtm0KaW6BktpRfTEYhW7kHM9Qg4x3aKFUWou7T8cU70r0o1LlNJnIq980HmyJPyRGXHh/VZygP420GYTbLs0WyyfVan9wLueYHNEm7vAUhil26dx5SDIFy+cqlKHGgvlWX0aT955amMsjSK9lsB/tYo769FaF8c/VtmuFBjWuvUZMTaG1VZnA9Op0exK0hyIf0/gdvbwmsGIb5RAh7mz9OhqiheNwsKkS4mJiltCm31HqR8B4brljJ6HrPPZpb3tFhyPWDwiK9OZSvBYv6faFGalA5HVOZWeFd/VI1bML1ejX+VBs1jfsVbbMeUZYIUxUWqPjOO7bBxFerVIEz3VpnFIUYKmVSv7TPFJXhjp0NNu5aoyIRjtPchxbk4p5tMnW1UfP9sW91O9PefRR0gXaH+Hnxo7n4IWnU5WKj2Fd3h1TruKpzhIvdqBTJgk8YDVy5Ng96qW27R3mMS6ITYU0pex2Gaaau4yJdQhiT6o4EUPXMRDx7FrKT5RAGTpx9nSeE1dTawzKqCt+EUDVQfLpr+GokSWyTHnhsKZWSU4pCRpkzae7DKSFU8pAS5aL2kLe9DnWYifzYBw+ACwdN66WMX42bxMbR5nZTXaVuBcKWX6p7DHHN5kC1BlpvDfB50lG7v/f1hVJ/MpyUjEo1u5Izs/ESc5andr/huAZjH/ZE7SVduIAQF2fLVz2/UjZ/OQk401FdQxUsyhjREkeIRtaVTLKMIZqV0OhO29/NF3L+6eYKWvJxc52ZJF+r1MCM0jftHlA7wcxZvGg1Ig+ecvDUGWvUOXAY6vtH8EIdkZqq18Cw3RsChBwcumnlynwF2XHDL+Lfyq0An4gg/K+SNLZzT/OGpSgqSKExjlrelCqhzTxQ3eFi7SkA1zigoeH/GMnwWxmW5pAKMM5nlcpEEmrAngsKqNlnZEaXfeQavNSJy/cd5oKwJ3LaruAvIDJTnErYIZxeXnm0ip9jkerSM5DdliHopl5H8WWkO51qdbBegXBGdL7IQtJ4XBd+thS9ReJCF7rQhS50oQtd6EIXutCFLnShJOj/AVV/W4SY0PcSAAAAAElFTkSuQmCC'
       /*'https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?auto=format&fit=crop&w=400&q=80'*/,
      title: '전산전자',
      width: '40%',
    },
    {
      url:
      'data:image/png;base64,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'
        /*'https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=400&q=80'*/,
      title: '법',
      width: '20%',
    },
    {
      url:
      'https://www.handong.edu/site/handong/res/img/sub_874-01.png'
        /*'https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400&q=80'*/,
      title: '콘융디',
      width: '40%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        For all major
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
