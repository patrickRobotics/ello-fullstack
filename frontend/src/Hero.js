import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


const Hero = ({ search, setSearch }) => {
  return (
    <Box>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Explore Reading&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: 'primary.yellow',
              }}
            >
              Sets
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
          Over 700 decodable books that match your child's reading ability.
          Help prevent the summer slump, without frustration
          </Typography>
        </Stack>
        <TextField
          sx={{ width: { md: '50%' }, mt: 2 }}
          hiddenLabel
          size="small"
          variant="outlined"
          aria-label="Search Books"
          placeholder="Search Books"
          inputProps={{
            autoComplete: 'off',
            'aria-label': 'Search Books',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Container>
    </Box>
  );
}

export default Hero;
