import { Box, Grid, TextField } from '@mui/material';

export const Validation = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', paddingTop: '2em' }}
    >
      <Box
        sx={{
          width: '80%',
          maxWidth: '700px',
          padding: '2em',
          borderRadius: '10px',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        <h2>To finish your account scan the QRCode Bellow</h2>

        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAFeAQAAAADlUEq3AAAC5ElEQVR4Xu2ZXY6kMAwGI+UAc6RcnSNxAKSsqww96d7Val5WWmEsGgWnwsMn/zHT5s/taJ+ev9gDr/bAqz3wag+82gOv9sCr/XO4YSN+Rxtzbn3Ovo9Yu2CvV4JZ7yOA9jXjOr62I4A9Nrfwn0AdeI+tgV/FQkYe5xanwsNjPfhAtw3pGhqGegRVVTiAmQtNJfOxGBw/GYLHrQBCuoPj4wTKwEpFKv3pYq8UnNaJpSgsCNUn+dXV7bIqsGFDWjWbslptnKVBu64EK9oEuiptaEi9pQeRWaXgV6Wl1NCCOdU9wqIYnP6DqZWDKV3Xf9Cj841VYLNpkEG04JFwM8uMos8cvD9sWuESm4qWlxoWgv2KUboQzVKT0plln2lVAFaicPJRgw+Ge7yEs6Vg1rtzO9KNULJfouVuKVhA6S64mVkm1/Z7kbk3TF3dGzHjbJZjm3CK9ibd/WEl8lneLOMN4VdVrQqc33HNUY2EahaWXFCH36S7PWzuTBkEZI16mVNn+a0FGzZUGAc2T0Wp0b+jXh0Yp+F0yLBervaeVreHg2koFrfhhVYsnGbzSB14KhpwZBPMllVX7BSzDnycA2p8+EP2a2aDJN0+db45bM+VZ9391wPS8UcSXlIKniaUJZddSq751ZntT6QU3JnKmFoNIeSiwlhsj4+57u5wkAYM6UM4EVfA+gehVQmm3tJxmiUl6u2GgDhTRl5SB558343UKo+wJrkg81V1YBNnm/adbrtpdmRJrlJwGGlFmW1ZfvO45TejqxB8OJ3SlF9j6sVkwSkFd0vrVKi0K6e2vJ+vrAGnhXvalFGMtNqaohFOlWDVCukikMZkd2SlfRXeUjBrABuxQok1AswwkyoD7+QRWn0P88M1qsqXg0O0Zt+xBSPjYVrpLAd3MURjGiGnuJAxqTLwNK2Mn8nAFhjh1BQt73Vg/Nf3Phoqo4vgt/NtZeCf2QOv9sCrPfBqD7zaA6/2wKv9L/AvPfiWwzEGDbUAAAAASUVORK5CYII="
            alt="QRcode"
          />
        </div>

        <TextField
          id="qr-code"
          label="Code"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: '10px',
          }}
        />
      </Box>
    </Grid>
  );
};
