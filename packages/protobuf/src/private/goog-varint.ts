// Copyright 2008 Google Inc.  All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
// * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
// * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// Code generated by the Protocol Buffer compiler is owned by the owner
// of the input file used when generating it.  This code is not
// standalone and requires a support library to be linked with it.  This
// support library is itself covered by the above license.

/* eslint-disable prefer-const,@typescript-eslint/restrict-plus-operands */

/**
 * Read a 64 bit varint as two JS numbers.
 *
 * Returns tuple:
 * [0]: low bits
 * [1]: high bits
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/buffer_decoder.js#L175
 */
export function varint64read(this: ReaderLike): [number, number] {
  let lowBits = 0;
  let highBits = 0;

  for (let shift = 0; shift < 28; shift += 7) {
    let b = this.buf[this.pos++];
    lowBits |= (b & 0x7f) << shift;
    if ((b & 0x80) == 0) {
      this.assertBounds();
      return [lowBits, highBits];
    }
  }

  let middleByte = this.buf[this.pos++];

  // last four bits of the first 32 bit number
  lowBits |= (middleByte & 0x0f) << 28;

  // 3 upper bits are part of the next 32 bit number
  highBits = (middleByte & 0x70) >> 4;

  if ((middleByte & 0x80) == 0) {
    this.assertBounds();
    return [lowBits, highBits];
  }

  for (let shift = 3; shift <= 31; shift += 7) {
    let b = this.buf[this.pos++];
    highBits |= (b & 0x7f) << shift;
    if ((b & 0x80) == 0) {
      this.assertBounds();
      return [lowBits, highBits];
    }
  }

  throw new Error("invalid varint");
}

/**
 * Write a 64 bit varint, given as two JS numbers, to the given bytes array.
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/writer.js#L344
 */
export function varint64write(lo: number, hi: number, bytes: number[]): void {
  for (let i = 0; i < 28; i = i + 7) {
    const shift = lo >>> i;
    const hasNext = !(shift >>> 7 == 0 && hi == 0);
    const byte = (hasNext ? shift | 0x80 : shift) & 0xff;
    bytes.push(byte);
    if (!hasNext) {
      return;
    }
  }

  const splitBits = ((lo >>> 28) & 0x0f) | ((hi & 0x07) << 4);
  const hasMoreBits = !(hi >> 3 == 0);
  bytes.push((hasMoreBits ? splitBits | 0x80 : splitBits) & 0xff);

  if (!hasMoreBits) {
    return;
  }

  for (let i = 3; i < 31; i = i + 7) {
    const shift = hi >>> i;
    const hasNext = !(shift >>> 7 == 0);
    const byte = (hasNext ? shift | 0x80 : shift) & 0xff;
    bytes.push(byte);
    if (!hasNext) {
      return;
    }
  }

  bytes.push((hi >>> 31) & 0x01);
}

// constants for binary math
const TWO_PWR_32_DBL = (1 << 16) * (1 << 16);

/**
 * Parse decimal string of 64 bit integer value as two JS numbers.
 *
 * Returns tuple:
 * [0]: minus sign?
 * [1]: low bits
 * [2]: high bits
 *
 * Copyright 2008 Google Inc.
 */
export function int64fromString(dec: string): [boolean, number, number] {
  // Check for minus sign.
  let minus = dec[0] == "-";
  if (minus) dec = dec.slice(1);
  // Work 6 decimal digits at a time, acting like we're converting base 1e6
  // digits to binary. This is safe to do with floating point math because
  // Number.isSafeInteger(ALL_32_BITS * 1e6) == true.
  const base = 1e6;
  let lowBits = 0;
  let highBits = 0;

  function add1e6digit(begin: number, end?: number) {
    // Note: Number('') is 0.
    const digit1e6 = Number(dec.slice(begin, end));
    highBits *= base;
    lowBits = lowBits * base + digit1e6;
    // Carry bits from lowBits to
    if (lowBits >= TWO_PWR_32_DBL) {
      highBits = highBits + ((lowBits / TWO_PWR_32_DBL) | 0);
      lowBits = lowBits % TWO_PWR_32_DBL;
    }
  }

  add1e6digit(-24, -18);
  add1e6digit(-18, -12);
  add1e6digit(-12, -6);
  add1e6digit(-6);
  return [minus, lowBits, highBits];
}

/**
 * Format 64 bit integer value (as two JS numbers) to decimal string.
 *
 * Copyright 2008 Google Inc.
 */
export function int64toString(bitsLow: number, bitsHigh: number): string {
  // Skip the expensive conversion if the number is small enough to use the
  // built-in conversions.
  if (bitsHigh <= 0x1fffff) {
    return "" + (TWO_PWR_32_DBL * bitsHigh + bitsLow);
  }

  // What this code is doing is essentially converting the input number from
  // base-2 to base-1e7, which allows us to represent the 64-bit range with
  // only 3 (very large) digits. Those digits are then trivial to convert to
  // a base-10 string.

  // The magic numbers used here are -
  // 2^24 = 16777216 = (1,6777216) in base-1e7.
  // 2^48 = 281474976710656 = (2,8147497,6710656) in base-1e7.

  // Split 32:32 representation into 16:24:24 representation so our
  // intermediate digits don't overflow.
  let low = bitsLow & 0xffffff;
  let mid = (((bitsLow >>> 24) | (bitsHigh << 8)) >>> 0) & 0xffffff;
  let high = (bitsHigh >> 16) & 0xffff;

  // Assemble our three base-1e7 digits, ignoring carries. The maximum
  // value in a digit at this step is representable as a 48-bit integer, which
  // can be stored in a 64-bit floating point number.
  let digitA = low + mid * 6777216 + high * 6710656;
  let digitB = mid + high * 8147497;
  let digitC = high * 2;

  // Apply carries from A to B and from B to C.
  let base = 10000000;
  if (digitA >= base) {
    digitB += Math.floor(digitA / base);
    digitA %= base;
  }

  if (digitB >= base) {
    digitC += Math.floor(digitB / base);
    digitB %= base;
  }

  // Convert base-1e7 digits to base-10, with optional leading zeroes.
  function decimalFrom1e7(digit1e7: number, needLeadingZeros: number) {
    let partial = digit1e7 ? String(digit1e7) : "";
    if (needLeadingZeros) {
      return "0000000".slice(partial.length) + partial;
    }
    return partial;
  }

  return (
    decimalFrom1e7(digitC, /*needLeadingZeros=*/ 0) +
    decimalFrom1e7(digitB, /*needLeadingZeros=*/ digitC) +
    // If the final 1e7 digit didn't need leading zeros, we would have
    // returned via the trivial code path at the top.
    decimalFrom1e7(digitA, /*needLeadingZeros=*/ 1)
  );
}

/**
 * Write a 32 bit varint, signed or unsigned. Same as `varint64write(0, value, bytes)`
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/1b18833f4f2a2f681f4e4a25cdf3b0a43115ec26/js/binary/encoder.js#L144
 */
export function varint32write(value: number, bytes: number[]): void {
  if (value >= 0) {
    // write value as varint 32
    while (value > 0x7f) {
      bytes.push((value & 0x7f) | 0x80);
      value = value >>> 7;
    }
    bytes.push(value);
  } else {
    for (let i = 0; i < 9; i++) {
      bytes.push((value & 127) | 128);
      value = value >> 7;
    }
    bytes.push(1);
  }
}

/**
 * Read an unsigned 32 bit varint.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/buffer_decoder.js#L220
 */
export function varint32read(this: ReaderLike): number {
  let b = this.buf[this.pos++];
  let result = b & 0x7f;
  if ((b & 0x80) == 0) {
    this.assertBounds();
    return result;
  }

  b = this.buf[this.pos++];
  result |= (b & 0x7f) << 7;
  if ((b & 0x80) == 0) {
    this.assertBounds();
    return result;
  }

  b = this.buf[this.pos++];
  result |= (b & 0x7f) << 14;
  if ((b & 0x80) == 0) {
    this.assertBounds();
    return result;
  }

  b = this.buf[this.pos++];
  result |= (b & 0x7f) << 21;
  if ((b & 0x80) == 0) {
    this.assertBounds();
    return result;
  }

  // Extract only last 4 bits
  b = this.buf[this.pos++];
  result |= (b & 0x0f) << 28;

  for (let readBytes = 5; (b & 0x80) !== 0 && readBytes < 10; readBytes++)
    b = this.buf[this.pos++];

  if ((b & 0x80) != 0) throw new Error("invalid varint");

  this.assertBounds();

  // Result can have 32 bits, convert it to unsigned
  return result >>> 0;
}

type ReaderLike = {
  buf: Uint8Array;
  pos: number;
  len: number;
  assertBounds(): void;
};
